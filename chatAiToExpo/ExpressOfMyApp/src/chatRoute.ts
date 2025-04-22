// import { createGoogleGenerativeAI, google } from "@ai-sdk/google";
import { createDeepSeek } from "@ai-sdk/deepseek";
import { generateText, streamText } from "ai";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { createRecord } from "./db";
import { authMiddleware } from "./auth.middleware";
dotenv.config();

export const chatRoute = express.Router();

// const googleApiKey = createGoogleGenerativeAI({
//   apiKey: process.env.GOOGLE_API_KEY,
// });
const deepseek = createDeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY,
});

// yyyy-MM-dd
const today = new Date().toISOString().split("T")[0];

const prompt = `
请你分析一下我的输入,
如果是消费或者支出记录,
则按照json格式返回,不然正常返回。
格式如下 : 
{"amount": 1000, "title": "others", "date": "2024-01-01"}, 
规则是: 
1.如果是消费,则amount是负数,如果是收入,则amount是正数, 
2. 如果是支出,则title是消费的商品或者服务,如果是收入,则title是收入的来源,如果分析不出来,则填others 
3.今天是${today},如果能分析出日期,则date是日期,否则为今天
`;

chatRoute.post("/", authMiddleware, async (req: Request, res: Response) => {
  const { messages, user_id: UserId } = req.body;
  // 结构化输出
  let resJson = {
    text: "",
    records: "",
  };

  try {
    const { text } = await generateText({
      // model: google("gemini-2.0-flash"),
      model: deepseek("deepseek-chat"),
      system: prompt,
      messages,
    });

    const parseRes = parseResult(text);
    if (parseRes) {
      // 存在就保存
      await createRecord(
        UserId,
        parseRes.amount,
        parseRes.title,
        parseRes.date
      );
      resJson.records = parseRes;
    } else {
      resJson.text = text;
    }
    res.status(200).json(resJson);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ text: "请求失败", record: null });
    return;
  }
});

const parseResult = (text: string) => {
  try {
    // 清理可能存在的markdown格式
    const cleanedText = text
      .replace(/```json\n/, "")
      .replace(/\n```/, "")
      .trim();
    const parseResult = JSON.parse(cleanedText);
    if (parseResult.amount && parseResult.title && parseResult.date) {
      return parseResult;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

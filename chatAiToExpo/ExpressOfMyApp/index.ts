import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { chatRoute } from "./src/chatRoute";
import { recordRoute } from "./src/recordRoute";

// For env file
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;
// 解决跨域问题
app.use(cors());
app.use(express.json());

// test 接口
// app.get("/", (req: Request, res: Response) => {
//   res.send("欢迎使用Express + TypeScript Server");
// });

app.use("/chat", chatRoute);
app.use("/records", recordRoute);
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// import { generateAPIUrl } from "@/utils/utils";
import { Message, useChat } from "@ai-sdk/react";
import { fetch as expoFetch } from "expo/fetch";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
  View,
  TextInput,
  ScrollView,
  Text,
  SafeAreaView,
  Alert,
} from "react-native";
import { useAuth } from "../_layout";
import RecordCard from "@/components/RecordCard";
import { useRecord } from "./index";

// 对后端返回数据进行解析
const renderMsssage = (message: Message) => {
  if (message.role === "assistant" && message.id !== "1") {
    const parsedMessage = JSON.parse(message.content);
    if (parsedMessage.text) {
      return <Text>{parsedMessage.text}</Text>;
    }

    return <RecordCard record={parsedMessage.records} />;
  }

  return <Text>{message.content}</Text>;
};
export default function App() {
  const session = useAuth((state: any) => state.session);
  const fetchRecords = useRecord((state: any) => state.fetchRecords);

  const { messages, error, handleInputChange, input, handleSubmit } = useChat({
    fetch: expoFetch as unknown as typeof globalThis.fetch,
    api: `${process.env.EXPO_PUBLIC_API_URL}/chat`,
    // api: generateAPIUrl("/api/chat"),
    onError: (error) => console.error(error, "ERROR"),
    streamProtocol: "text",
    body: {
      user_id: session?.user?.id,
    },
    initialMessages: [
      {
        id: "1",
        role: "assistant",
        content: `你好，我是你的AI助手，有什么可以帮助你的？`,
      },
    ],
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
    onFinish: (message, options) => {
      try {
        const parsedMessage = JSON.parse(message.content);
        if (!parsedMessage.text) {
          fetchRecords(new Date(), session);
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  // 在messages中添加关于报错的新数据
  if (error) {
    Alert.alert("Error", error.message);
  }
  return (
    <SafeAreaView className="bg-red-50 pt-8" style={{ height: "100%" }}>
      <View
        style={{
          height: "95%",
          display: "flex",
          flexDirection: "column",
          paddingHorizontal: 8,
        }}
      >
        <ScrollView style={{ flex: 1 }}>
          {messages.map((m) => (
            <View
              key={m.id}
              style={{ marginVertical: 8 }}
              className="flex-row gap-4 items-center p-5"
            >
              <View>
                <FontAwesome6
                  name={`${m.role === "assistant" ? "robot" : "user-tie"}`}
                  size={24}
                  color="blue"
                />
              </View>
              <View>
                <Text style={{ fontWeight: 700 }}>{m.role}</Text>
                <View>{renderMsssage(m)}</View>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={{ marginTop: 8, marginBottom: -25 }}>
          <TextInput
            style={{ backgroundColor: "white", padding: 8 }}
            className="rounded-lg"
            placeholder="Say something..."
            value={input}
            onChange={(e) =>
              handleInputChange({
                ...e,
                target: {
                  ...e.target,
                  value: e.nativeEvent.text,
                },
              } as unknown as React.ChangeEvent<HTMLInputElement>)
            }
            onSubmitEditing={(e) => {
              if (session?.user?.id) {
                handleSubmit(e);
                e.preventDefault();
              } else {
                Alert.alert("请先登录");
              }
            }}
            autoFocus={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

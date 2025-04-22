import { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Pressable, ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import RecordCard from "@/components/RecordCard";
import { create } from "zustand";
import axios from "axios";
import { useAuth } from "../_layout";

export const useRecord = create((set) => ({
  records: [],
  fetchRecords: (date: Date, session: any) => {
    if (!session?.user?.id) return;

    const headers = {
      Authorization: `Bearer ${session?.access_token}`,
    };

    axios
      .post(
        `${process.env.EXPO_PUBLIC_API_URL}/records`,
        {
          user_id: session?.user?.id,
          date: date.toISOString().split("T")[0],
        },
        { headers }
      )
      .then((res) => {
        set({ records: res.data });
      });
  },
}));

const HomeScreen = () => {
  const session = useAuth((state: any) => state.session);
  const [data, setData] = useState(new Date());
  const [showDatePocker, setShowDatePicker] = useState(false);

  const records = useRecord((state: any) => state.records);
  const fetchRecords = useRecord((state: any) => state.fetchRecords);

  useEffect(() => {
    if (session?.user?.id) {
      fetchRecords(data, null);
    }
  }, [data]);

  return (
    <>
      <SafeAreaView className="flex flex-1 gap-4 mx-4 mt-12 ">
        <View className="flex flex-row justify-between">
          <Text className="font-bold">{data.toLocaleDateString()}</Text>
          <Pressable>
            <Text className="text-gray-500">选择日期</Text>
          </Pressable>
        </View>

        {showDatePocker && (
          <DateTimePicker
            value={data}
            mode="date"
            display="inline"
            onChange={(event, selectedDate) => {
              if (selectedDate) {
                setData(selectedDate);
                setShowDatePicker(false);
              }
            }}
          />
        )}
        <View className="h-1/8 flex flex-row justify-between gap-2">
          <View className="flex-1 bg-green-50 roundded-lg p-4 flex items-center justify-center">
            <View className="w-full flex flex-row justify-between">
              <Text className="font-bold">收入</Text>
              <Text className="text-green-500">
                {records
                  .filter((record: any) => record.amount > 0)
                  .reduce((val: number, record: any) => val + record.amount, 0)}
              </Text>
            </View>
          </View>
          <View className="flex-1 bg-green-50 roundded-lg p-4 flex items-center justify-center">
            <View className="w-full flex flex-row justify-between">
              <Text className="font-bold">支出</Text>
              <Text className="text-red-500">
                {records
                  .filter((record: any) => record.amount < 0)
                  .reduce((val: number, record: any) => val + record.amount, 0)}
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-1 bg-gray-200 rounded-lg py-4 gap-2">
          <Text className="text-gray-500 ml-2">详细记录</Text>
          <ScrollView className="flex-1">
            {/* <RecordCard
              record={{
                id: 1,
                title: "收入",
                amount: 1000,
                createAt: "2023-01-01",
              }}
            /> */}
            {records.map((record: any) => (
              <RecordCard key={record.id} record={record} />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

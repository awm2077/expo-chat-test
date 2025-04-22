import { Text, View } from "react-native";

type Record = {
  id: number;
  title: string;
  amount: number;
  createAt: string;
};

const RecordCard = ({ record }: { record: Record }) => {
  return (
    <View className="bg-white rounded-xl mt-3 p-4 shadow-sm">
      <View className="flex-row justify-between items-center ">
        <Text className="text-lg font-semibold text-gray-800 flex-1">
          {record.title}
        </Text>
        <Text
          className={`text-xl font-bold ${
            record.amount > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {record.amount}
        </Text>
      </View>
    </View>
  );
};

export default RecordCard;

import { useLocalSearchParams, Stack, router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { parcel_data } from "@/utils/Constants";
import Octicons from "@expo/vector-icons/Octicons";

const parcelDetails = () => {
  const { _id } = useLocalSearchParams();
  const parcel = parcel_data[Number(_id)];

  return (
    <ScrollView scrollEventThrottle={16} bounces={false}>
      <SafeAreaView>
        <Stack.Screen options={{ headerShown: false }} />
        <View className="px-3 py-2 flex flex-row justify-between items-center">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="delete" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="py-10 px-3 flex items-center gap-x-5 flex-row ml-3">
          {/* <FontAwesome5 name="box" size={24} color="black" /> */}
          <FontAwesome6 name="people-carry-box" size={30} color="black" />
          <Text className="text-3xl font-medium">{parcel?.id}</Text>
        </View>

        <View className="bg-[#5151ff] rounded-xl p-5 mx-4">
          <View className="flex flex-row w-full items-center">
            <View className="w-[40%]">
              <Text className="text-white">From </Text>
              <Text className="text-white text-lg font-medium">
                {parcel?.from.split(",")[0]}
              </Text>
            </View>
            <View className="w-[20%] flex flex-col justify-center items-center">
              <FontAwesome6 name="truck-ramp-box" size={24} color="white" />
              <Text className="text-white font-medium text-lg">
                {parcel?.days}
              </Text>
            </View>
            <View className="w-[40%]">
              <Text className="text-white text-right">To </Text>
              <Text className="text-white text-right text-lg font-medium">
                {parcel?.to.split(",")[0]}
              </Text>
            </View>
          </View>

          <View className="flex flex-row w-full items-center mt-12">
            <View className="w-1/3">
              <Text className="text-white font-medium">Type</Text>
              <Text className="text-white font-bold text-xl">
                {parcel?.type}
              </Text>
            </View>
            <View className="w-1/3">
              <Text className="text-white font-medium text-center">Weight</Text>
              <Text className="text-white font-bold text-xl text-center">
                {parcel?.weight}
              </Text>
            </View>
            <View className="w-1/3">
              <Text className="text-white font-medium text-right">Status</Text>
              <Text className="text-white font-bold text-xl text-right">
                {parcel?.status}
              </Text>
            </View>
          </View>
        </View>

        <View className="ml-4 my-5">
          <Text className="text-3xl font-semibold">History</Text>
          <View className="flex flex-col">
            {parcel?.history?.reverse().map((history, index) => (
              <View key={index}>
                <View className="flex flex-row gap-x-2 border-l-2 ml-2 pb-2 border-slate-300">
                  <View className="pt-2 -ml-2">
                    <Octicons
                      name="dot-fill"
                      size={25}
                      color={index === 0 ? "#00B712" : "#a9cfff"}
                    />
                  </View>
                  <View>
                    <Text className="text-xl font-semibold">
                      {history?.message}
                    </Text>

                    <View className="flex flex-row justify-start items-center gap-2">
                      <Text className="text-lg font-medium">
                        {history?.date.split(",")[0]} , {history?.time}
                      </Text>
                      <Octicons name="dot-fill" size={10} color="black" />
                      <Text className="text-lg font-medium">
                        {history?.location.split(",")[0]}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default parcelDetails;

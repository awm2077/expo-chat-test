import HeaderBar from "@/components/HeaderBar";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { parcel_data } from "@/utils/Constants";
import Octicons from "@expo/vector-icons/Octicons";
import { router } from "expo-router";

const Home = () => {
  return (
    <ScrollView scrollEventThrottle={16} bounces={false}>
      <HeaderBar />
      <View className="p-5">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-2xl font-medium">Your Parcels</Text>
          <TouchableOpacity>
            <FontAwesome name="cogs" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View>
          {parcel_data?.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex flex-row items-center border-b border-gray-400/30 px-3 py-5 rounded-lg"
              onPress={() => router.push(`/parcel-details/${index}`)}
            >
              <View className={`w-11 h-11 justify-center items-center flex`}>
                <Image
                  source={{ uri: item?.logo }}
                  resizeMode="contain"
                  className="rounded-md w-full h-full"
                ></Image>
              </View>
              <View className="flex flex-col ml-3">
                <Text className="text-lg font-medium">{item?.id}</Text>
                <Text className="text-sm text-gray-500">
                  {item?.from.split(",")[0]} - {item?.to.split(",")[0]}
                </Text>
              </View>
              <View className="ml-auto flex flex-row items-center gap-x-2">
                <View>
                  <Octicons
                    name="dot-fill"
                    size={20}
                    color={item?.status === "Delivered" ? "#00B712" : "#FFA500"}
                  />
                </View>
                <Text className="text-lg font-medium">{item?.status}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

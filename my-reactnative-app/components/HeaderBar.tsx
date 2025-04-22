import {
  View,
  Text,
  useWindowDimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const HeaderBar = () => {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView
      className="bg-[#5151ff] rounded-b-3xl"
      style={{ width, height: height / 2.1 }}
    >
      <View className="py-2 px-5 flex flex-row w-full justify-between items-center">
        <TouchableOpacity className="bg-white/20 p-2 rounded-full">
          <MaterialCommunityIcons name="qrcode-scan" size={24} color="white" />
        </TouchableOpacity>

        <View>
          <Image
            source={{
              uri: "https://i.postimg.cc/y6tDDLTn/a0b9f821323f9bbc52bb950a26588ff.png",
            }}
            width={40}
            height={40}
            className="rounded-full"
          />
        </View>
      </View>
      <View className="flex items-center justify-center py-5 px-10">
        <Image
          source={require("@/assets/images/icon.png")}
          className="w-48 h-48"
        />

        <Text className="text-white text-4xl font-bold">Track Your Parcel</Text>
        <Text className="text-slate-300 font-medium text-center mt-3">
          Enter your tracking number to track your parcel
        </Text>

        <KeyboardAvoidingView className="w-full">
          <View className="relative flex flex-row items-center">
            <View className="absolute pt-5 pl-2">
              <Ionicons name="search-sharp" size={24} color="white" />
            </View>
            <TextInput
              placeholder="Tracking Number"
              placeholderTextColor={"white"}
              className="bg-white/20 w-full p-4 rounded-lg mt-5 text-white pl-10"
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default HeaderBar;

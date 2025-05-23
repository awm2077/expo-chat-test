import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "@/global.css";
import { useColorScheme } from "@/hooks/useColorScheme";
import { supabase } from "@/lib/supabase";
// import "@/lib/polyfill";
// 状态管理 zustand
import { create } from "zustand";

// const useBearStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }))
/*
interface AuthState {
  session: any | null;
  setSession: (session: any) => void;
}

export const useAuth = create<AuthState>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
}));
*/
export const useAuth = create((set) => ({
  session: null,
  setSession: (session: any) => set(session),
}));

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // 获取全局session
  const setSession = useAuth((state: any) => state.setSession);
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession({ session });
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession({ session });
    });
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

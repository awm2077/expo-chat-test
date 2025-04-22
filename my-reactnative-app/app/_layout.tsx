import "../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

const RootLayout = () => {
  return (
    <>
      <React.Fragment>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="parcel-details"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </React.Fragment>
    </>
  );
};

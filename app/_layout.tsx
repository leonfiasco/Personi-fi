import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "PlaywriteDE-Grund": require("../assets/fonts/PlaywriteDEGrund-VariableFont_wght.ttf"),
    Winky: require("../assets/fonts/WinkySans-Bold.ttf"),
  });

  const customConfig = {
    ...config,
    tokens: {
      ...config.tokens,
      colors: {
        ...config.tokens.colors,
        background: "#F7F7F6",
        cardBg: "#262727",
        futuristicAccent: "#B2DF01",
        oliveGreen: "#6B8E23",
      },
    },
  };

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GluestackUIProvider config={customConfig}>
        <Stack>
          <Stack.Screen name="input-income" options={{ headerShown: false }} />
          <Stack.Screen name="input-expense" options={{ headerShown: false }} />

          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="In" />
        </Stack>
        <StatusBar style="auto" />
      </GluestackUIProvider>
    </ThemeProvider>
  );
}

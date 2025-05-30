// app/_layout.tsx
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { getTheme } from "@/config/theme";
import { BudgetProvider } from "@/context/BudgetContext";
import { customGluestackConfig } from "@/config/gluestack-config";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useLoadFonts } from "@/hooks/useLoadFonts";
import { IncomeProvider } from "@/context/IncomeContext";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider value={getTheme(colorScheme ?? "light")}>
      <GluestackUIProvider config={customGluestackConfig}>
        <BudgetProvider>
          <IncomeProvider>
            <Stack screenOptions={{ headerShown: false }} />
          </IncomeProvider>
        </BudgetProvider>
        <StatusBar style="auto" />
      </GluestackUIProvider>
    </ThemeProvider>
  );
}

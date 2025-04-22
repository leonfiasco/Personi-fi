import { DarkTheme, DefaultTheme } from "@react-navigation/native";

export const getTheme = (colorScheme: string) =>
  colorScheme === "dark" ? DarkTheme : DefaultTheme;

import { Stack } from "expo-router";

export default function StackNavigator() {
  return (
    <Stack>
      <Stack.Screen
        name="screens/input-income"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="screens/input-expense"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="screens/budget" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="In" />
    </Stack>
  );
}

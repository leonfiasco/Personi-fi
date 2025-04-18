import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const DashboardBtns = () => {
  const router = useRouter();
  const buttons = [
    {
      title: "Income",
      iconName: "arrow-up",
      bgColor: "#8aa908",
      iconColor: "#16a34a",
      onPress: () => router.push("/input-income"), // 👈 navigate to screen
    },
    {
      title: "Expenses",
      iconName: "arrow-down",
      bgColor: "#9a161b",
      iconColor: "#dc2626",
      onPress: () => router.push("/input-expense"),
    },
    {
      title: "Transactions",
      iconName: "list",
      bgColor: "#dbeafe",
      iconColor: "#2563eb",
    },
    {
      title: "Report",
      iconName: "pie-chart",
      bgColor: "#f3e8ff",
      iconColor: "#7c3aed",
    },
  ];

  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={
            button.onPress || (() => console.log(`${button.title} pressed`))
          }
        >
          <View style={styles.buttonContent}>
            <View style={styles.iconContainer}>
              <Feather
                name={button.iconName as any}
                size={20}
                color={button.iconColor}
              />
            </View>
            <Text style={styles.buttonText}>{button.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16, // mx="$4"
    marginTop: 15, // mt="$6"
    marginBottom: 16, // mb="$4"
  },
  button: {
    backgroundColor: "white",
    borderRadius: 12, // rounded="$lg"
    width: 80, // width="$20"
    height: 80, // height="$20"
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#737373", // shadowColor="$trueGray500"
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonContent: {
    alignItems: "center",
  },
  iconContainer: {
    width: 48, // width="$12"
    height: 48, // height="$12"
    borderWidth: 1,
    borderColor: "#d4d4d4", // borderColor="$$trueGray300"
    borderRadius: 24, // borderRadius="$full"
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4, // mb="$1"
  },
  buttonText: {
    fontWeight: "normal",
    fontSize: 12, // fontSize="$xs"
    marginTop: 4, // mt="$1"
  },
});

export default DashboardBtns;

import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { styles } from "./styles.module";

const { width: screenWidth } = Dimensions.get("window");

const DashboardBtns = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const buttons = [
    {
      title: "Income",
      iconName: "arrow-up",
      bgColor: "#8aa908",
      iconColor: "#16a34a",
      onPress: () => router.push("/screens/InputIncome/input-income"),
    },
    {
      title: "Expenses",
      iconName: "arrow-down",
      bgColor: "red",
      iconColor: "#dc2626",
      onPress: () => router.push("/screens/InputExpense/input-expense"),
    },
    {
      title: "Budget",
      iconName: "book-open",
      bgColor: "#dbeafe",
      iconColor: "#2563eb",
      onPress: () => router.push("/screens/Budget/budget"),
    },
    {
      title: "Report",
      iconName: "pie-chart",
      bgColor: "#f3e8ff",
      iconColor: "#7c3aed",
      // onPress: () => router.push("/report"),
    },
    {
      title: "Weekly Limits",
      iconName: "clock",
      bgColor: "#ffedd5",
      iconColor: "#ea580c",
      // onPress: () => router.push("/weekly-limits"),
    },
  ];

  const renderItem = ({ item }: { item: (typeof buttons)[0] }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={item.onPress || (() => console.log(`${item.title} pressed`))}
    >
      <View style={styles.buttonContent}>
        <View style={[styles.iconContainer, { borderColor: item.bgColor }]}>
          <Feather
            name={item.iconName as any}
            size={20}
            color={item.iconColor}
          />
        </View>
        <Text style={styles.buttonText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={buttons}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={screenWidth * 0.25} // Adjust based on your button width + margin
        decelerationRate="fast"
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.carouselContent}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / (screenWidth * 0.25)
          );
          setCurrentIndex(index);
        }}
      />
    </View>
  );
};

export default DashboardBtns;

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
      onPress: () => router.push("/screens/input-income"),
    },
    {
      title: "Expenses",
      iconName: "arrow-down",
      bgColor: "red",
      iconColor: "#dc2626",
      onPress: () => router.push("/screens/input-expense"),
    },
    {
      title: "Budget",
      iconName: "book-open",
      bgColor: "#dbeafe",
      iconColor: "#2563eb",
      onPress: () => router.push("/screens/budget"),
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

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 15,
    marginBottom: 16,
  },
  carouselContent: {
    paddingHorizontal: 16,
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 12,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#737373",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginHorizontal: 8,
  },
  buttonContent: {
    alignItems: "center",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
    backgroundColor: "transparent", // Ensure background is transparent
  },
  buttonText: {
    fontWeight: "normal",
    fontSize: 12,
    marginTop: 4,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#d4d4d4",
    marginHorizontal: 3,
  },
  paginationDotActive: {
    backgroundColor: "#737373",
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

export default DashboardBtns;

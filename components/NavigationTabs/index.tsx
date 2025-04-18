import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Box as GluestackBox } from "@gluestack-ui/themed"; // Only needed if you use any gluestack specific props

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <View style={styles.tabRow}>
          {["Dashboard", "Spending", "Budget"].map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={styles.tabButton}
              >
                <View style={[styles.tabContent, isActive && styles.activeTab]}>
                  <Text
                    style={[styles.tabText, isActive && styles.activeTabText]}
                  >
                    {tab}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5", // Replace with your $tabBackground color
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  tabContainer: {
    backgroundColor: "white",
    borderRadius: 12, // Equivalent to $lg
    padding: 4, // Equivalent to $1
    width: "100%",
    maxWidth: 400,
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  tabButton: {
    flex: 1,
  },
  tabContent: {
    paddingHorizontal: 16, // Equivalent to $4
    paddingVertical: 16, // Equivalent to $4
    borderRadius: 8, // Equivalent to $md
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "black",
  },
  tabText: {
    color: "black",
    fontSize: 14, // Equivalent to $sm
    textAlign: "center",
    fontWeight: "normal",
  },
  activeTabText: {
    color: "white",
  },
});

export default NavigationTabs;

import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

interface BudgetTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BudgetTabs: React.FC<BudgetTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.tabsContainer}>
      {["Expenses", "Income", "Budget"].map((tab) => (
        <Pressable
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => setActiveTab(tab)}
        >
          <Text
            style={[styles.tabText, activeTab === tab && styles.activeTabText]}
          >
            {tab}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: "#000",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
  activeTabText: {
    color: "#FFF",
    fontWeight: "600",
  },
});

export default BudgetTabs;

import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { styles } from "./styles.module";

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

export default BudgetTabs;

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Box as GluestackBox } from "@gluestack-ui/themed";
import { INavigationTabs } from "../../types";

import { styles } from "./styles.module";

const NavigationTabs = ({
  tabs,
  initialActiveTab,
  budget,
}: INavigationTabs) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab || tabs[0]);

  // Determine if we're using the budget variant

  return (
    <View style={[styles.container, budget && styles.budgetContainer]}>
      <View style={[styles.tabContainer, budget && styles.budgetTabContainer]}>
        <View style={styles.tabRow}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={styles.tabButton}
              >
                <View
                  style={[
                    styles.tabContent,
                    isActive && styles.activeTab,
                    budget && styles.budgetTabContent,
                    budget && isActive && styles.budgetActiveTab,
                  ]}
                >
                  <Text
                    style={[
                      styles.tabText,
                      isActive && styles.activeTabText,
                      budget && styles.budgetTabText,
                      budget && isActive && styles.budgetActiveTabText,
                    ]}
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

export default NavigationTabs;

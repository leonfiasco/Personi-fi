import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ICategoryBreakdown } from "@/types";

import { styles } from "./styles.module";

const CategoryBreakdown: React.FC<ICategoryBreakdown> = ({
  categorySpending,
}) => {
  return (
    <View style={styles.categoryBreakdown}>
      <Text style={styles.sectionTitle}>Spending by Category</Text>
      {categorySpending.map((category) => (
        <View key={category.name} style={styles.categoryItem}>
          <View style={styles.categoryIcon}>
            <FontAwesome name={category.icon as any} size={20} color="#666" />
          </View>
          <View style={styles.categoryDetails}>
            <Text style={styles.categoryName}>{category.name}</Text>
            <Text style={styles.categoryPayment}>
              {category.amount.toFixed(2)} • {category.percentage}%
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CategoryBreakdown;

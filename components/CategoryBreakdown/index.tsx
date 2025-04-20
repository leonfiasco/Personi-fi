import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ICategorySpending } from "@/types";

interface CategoryBreakdownProps {
  categorySpending: ICategorySpending[];
}

const CategoryBreakdown: React.FC<CategoryBreakdownProps> = ({
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

const styles = StyleSheet.create({
  categoryBreakdown: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    color: "#333",
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  categoryDetails: {
    flex: 1,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 4,
  },
  categoryPayment: {
    fontSize: 14,
    color: "#666",
  },
});

export default CategoryBreakdown;

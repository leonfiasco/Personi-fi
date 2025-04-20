import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ProgressCircle, RecentTransactions } from "@/components";

interface BudgetOverviewProps {
  weeklyBudget: number;
  currentSpending: number;
  timeFrame: string;
  setTimeFrame: (frame: string) => void;
}

const BudgetOverview: React.FC<BudgetOverviewProps> = ({
  weeklyBudget,
  currentSpending,
  timeFrame,
  setTimeFrame,
}) => {
  return (
    <View style={styles.budgetOverview}>
      <Text style={styles.sectionTitle}>Weekly Budget</Text>

      {/* <ProgressCircle
        weeklyBudget={weeklyBudget}
        currentSpending={currentSpending}
        timeFrame={timeFrame}
        setTimeFrame={setTimeFrame}
      /> */}

      <View style={styles.spendingSummary}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Day</Text>
          <Text style={styles.summaryValue}>$52</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Week</Text>
          <Text style={styles.summaryValue}>$403</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Month</Text>
          <Text style={styles.summaryValue}>$1,612</Text>
        </View>
      </View>
      {/* <RecentTransactions transactions={['yam']}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  budgetOverview: {
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
  spendingSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    paddingTop: 16,
  },
  summaryItem: {
    alignItems: "center",
  },
  summaryLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});

export default BudgetOverview;

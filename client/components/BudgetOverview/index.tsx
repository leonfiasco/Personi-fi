import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ProgressCircle, RecentTransactions } from "@/components";
import { styles } from "./styles.module";

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

export default BudgetOverview;

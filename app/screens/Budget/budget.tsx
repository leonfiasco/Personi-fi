// BudgetScreen.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ProgressCircle from "@/components/ProgressCircle";
import RecentTransactions from "@/components/RecentTransactions";
import { useRouter } from "expo-router";
import { ITransaction } from "@/types";

import { styles } from "./styles.module";

const BudgetScreen = () => {
  const router = useRouter();
  const [weeklyBudget, setWeeklyBudget] = useState(500);
  const [currentSpending, setCurrentSpending] = useState(0);
  const [timeFrame, setTimeFrame] = useState<"Week" | "Month" | "Year">("Week");

  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [showAllTransactions, setShowAllTransactions] = useState(false);

  // Calculate derived budget values
  const monthlyBudget = Math.round(weeklyBudget * 4.33); // Average weeks in month
  const yearlyBudget = monthlyBudget * 12;
  const threeMonthBudget = monthlyBudget * 3;
  const sixMonthBudget = monthlyBudget * 6;
  const nineMonthBudget = monthlyBudget * 9;

  // Sample transactions (in a real app, you'd fetch these)
  useEffect(() => {
    const sampleTransactions: ITransaction[] = [
      {
        id: "1",
        name: "Grocery Store",
        amount: 85.5,
        date: "Today",
        category: "Food",
        icon: "shopping-cart",
      },
      {
        id: "2",
        name: "Gas Station",
        amount: 45.2,
        date: "Yesterday",
        category: "Transport",
        icon: "car",
      },
      {
        id: "3",
        name: "Restaurant",
        amount: 32.75,
        date: "Yesterday",
        category: "Food",
        icon: "cutlery",
      },
      {
        id: "4",
        name: "Movie Tickets",
        amount: 28.0,
        date: "2 days ago",
        category: "Entertainment",
        icon: "film",
      },
      {
        id: "5",
        name: "Clothing Store",
        amount: 65.3,
        date: "3 days ago",
        category: "Shopping",
        icon: "shopping-bag",
      },
    ];
    setTransactions(sampleTransactions);
    setCurrentSpending(
      sampleTransactions.reduce((sum, t) => sum + t.amount, 0)
    );
  }, []);

  const displayedTransactions = showAllTransactions
    ? transactions
    : transactions.slice(0, 3);

  // In BudgetScreen.tsx
  const handleAddExpense = () => {
    router.push({
      pathname: "/screens/InputExpense/input-expense",
      params: { fromBudgetScreen: "true" }, // Pass as string
    });
  };
  return (
    <ScrollView style={styles.container}>
      {/* Budget Overview Section */}
      <View style={styles.budgetCard}>
        <Text style={styles.sectionTitle}>Budget Overview</Text>

        <View style={styles.timeFrameTabs}>
          <Pressable
            style={[styles.tabButton, timeFrame === "Week" && styles.activeTab]}
            onPress={() => setTimeFrame("Week")}
          >
            <Text
              style={[
                styles.tabText,
                timeFrame === "Week" && styles.activeTabText,
              ]}
            >
              Weekly
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.tabButton,
              timeFrame === "Month" && styles.activeTab,
            ]}
            onPress={() => setTimeFrame("Month")}
          >
            <Text
              style={[
                styles.tabText,
                timeFrame === "Month" && styles.activeTabText,
              ]}
            >
              Monthly
            </Text>
          </Pressable>
          <Pressable
            style={[styles.tabButton, timeFrame === "Year" && styles.activeTab]}
            onPress={() => setTimeFrame("Year")}
          >
            <Text
              style={[
                styles.tabText,
                timeFrame === "Year" && styles.activeTabText,
              ]}
            >
              Yearly
            </Text>
          </Pressable>
        </View>

        <ProgressCircle
          weeklyBudget={weeklyBudget}
          currentSpending={currentSpending}
          timeFrame={timeFrame}
          setTimeFrame={setTimeFrame}
        />

        <View style={styles.budgetSummary}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Current Budget:</Text>
            <Text style={styles.summaryValue}>
              $
              {timeFrame === "Week"
                ? weeklyBudget
                : timeFrame === "Month"
                ? monthlyBudget
                : yearlyBudget}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Amount Spent:</Text>
            <Text style={styles.summaryValue}>
              ${currentSpending.toFixed(2)}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Remaining:</Text>
            <Text style={styles.summaryValue}>
              $
              {(timeFrame === "Week"
                ? weeklyBudget
                : timeFrame === "Month"
                ? monthlyBudget
                : yearlyBudget) - currentSpending}
            </Text>
          </View>
        </View>
      </View>

      {/* Budget Projections Section */}
      <View style={styles.projectionCard}>
        <Text style={styles.sectionTitle}>Budget Projections</Text>
        <View style={styles.projectionGrid}>
          <View style={styles.projectionItem}>
            <Text style={styles.projectionLabel}>3 Months</Text>
            <Text style={styles.projectionValue}>${threeMonthBudget}</Text>
          </View>
          <View style={styles.projectionItem}>
            <Text style={styles.projectionLabel}>6 Months</Text>
            <Text style={styles.projectionValue}>${sixMonthBudget}</Text>
          </View>
          <View style={styles.projectionItem}>
            <Text style={styles.projectionLabel}>9 Months</Text>
            <Text style={styles.projectionValue}>${nineMonthBudget}</Text>
          </View>
          <View style={styles.projectionItem}>
            <Text style={styles.projectionLabel}>12 Months</Text>
            <Text style={styles.projectionValue}>${yearlyBudget}</Text>
          </View>
        </View>
      </View>

      {/* Transactions Section */}
      <View style={styles.transactionsCard}>
        <View style={styles.transactionsHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <TouchableOpacity onPress={handleAddExpense}>
            <FontAwesome name="plus-circle" size={24} color="#4CAF50" />
          </TouchableOpacity>
        </View>

        <RecentTransactions transactions={displayedTransactions} />

        {transactions.length > 3 && (
          <Pressable
            style={styles.viewAllButton}
            onPress={() => setShowAllTransactions(!showAllTransactions)}
          >
            <Text style={styles.viewAllText}>
              {showAllTransactions ? "Show Less" : "View All Transactions"}
            </Text>
            <FontAwesome
              name={showAllTransactions ? "chevron-up" : "chevron-down"}
              size={16}
              color="#666"
            />
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
};

export default BudgetScreen;

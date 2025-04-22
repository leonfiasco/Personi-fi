import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { IRecentTransactionsProps } from "@/types";
import { useGetExpenses } from "@/hooks/Expenses/useGetExpenses";
import { useRouter } from "expo-router";
import { styles } from "./styles.module";

// Map your expense categories to icons
const categoryToIcon: Record<string, string> = {
  food: "cutlery",
  transportation: "car",
  shopping: "shopping-bag",
  entertainment: "film",
  bills: "file-text",
  // Add more mappings as needed
};

const RecentTransactions: React.FC<IRecentTransactionsProps> = ({
  weeklyBudget,
  showAllTransactions,
  setShowAllTransactions,
}) => {
  const router = useRouter();
  const { expenses, isLoading, error } = useGetExpenses();

  if (weeklyBudget === 0) return null;

  if (isLoading) {
    return (
      <View style={styles.transactionsSection}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.transactionsSection}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }

  const formatDate = (dateInput: string | Date) => {
    try {
      const date = new Date(dateInput);
      if (isNaN(date.getTime())) {
        console.warn("Invalid date input:", dateInput);
        return "N/A";
      }
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = String(date.getFullYear()).slice(-2);
      return `${day}/${month}/${year}`;
    } catch (error) {
      console.error("Date formatting error:", error);
      return "N/A";
    }
  };

  const handleAddExpense = () => {
    router.push({
      pathname: "/screens/InputExpense",
      params: { fromBudgetScreen: "true" },
    });
  };

  const transactions = (expenses || [])
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 3)
    .map((expense) => {
      const category = expense.transactionCategory?.toLowerCase() || "other";
      return {
        id: expense.id,
        name: expense.transactionMerchant,
        amount: expense.transactionAmount,
        date: formatDate(expense.createdAt),
        paymentMethod: "Credit Card",
        icon: categoryToIcon[category] || "money",
      };
    });

  return (
    <View
      style={[
        styles.transactionsCard,
        weeklyBudget <= 0 && styles.transactionsCardNoBudget,
      ]}
    >
      <View style={styles.transactionsHeader}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <TouchableOpacity onPress={handleAddExpense}>
          <FontAwesome
            name="plus-circle"
            size={24}
            color={weeklyBudget <= 0 ? "#666" : "#4CAF50"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.transactionsSection}>
        {transactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionItem}>
            <View style={styles.transactionIcon}>
              <FontAwesome
                name={transaction.icon as any}
                size={20}
                color="#666"
              />
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>{transaction.name}</Text>
              <Text style={styles.transactionDate}>
                {transaction.date} • {transaction.paymentMethod}
              </Text>
            </View>
            <Text style={styles.transactionAmount}>
              -${transaction.amount.toFixed(2)}
            </Text>
          </View>
        ))}
      </View>

      {transactions.length >= 3 && (
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
  );
};

export default RecentTransactions;

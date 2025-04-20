import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ITransaction } from "@/types";

interface RecentTransactionsProps {
  transactions: ITransaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
}) => {
  return (
    <View style={styles.transactionsSection}>
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
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
  );
};

const styles = StyleSheet.create({
  transactionsSection: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 20,
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
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 14,
    color: "#666",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#D32F2F",
  },
});

export default RecentTransactions;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ITransaction, IRecentTransactionsProps } from "@/types";

import { styles } from "./styles.module";

const RecentTransactions: React.FC<IRecentTransactionsProps> = ({
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

export default RecentTransactions;

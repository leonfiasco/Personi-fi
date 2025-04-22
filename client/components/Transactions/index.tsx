import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from "./styles.module";

const Transactions = () => {
  // Sample transaction data
  const transactions = [
    {
      id: 1,
      company: "Amazon",
      logo: "https://logo.clearbit.com/amazon.com",
      date: "May 15, 2023",
      amount: 88,
    },
    {
      id: 2,
      company: "Netflix",
      logo: "https://logo.clearbit.com/netflix.com",
      date: "May 10, 2023",
      amount: 15.99,
    },
    {
      id: 3,
      company: "Starbucks",
      logo: "https://logo.clearbit.com/starbucks.com",
      date: "May 5, 2023",
      amount: 5.75,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transactions</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      {transactions.map((transaction) => (
        <View key={transaction.id} style={styles.transactionItem}>
          <View style={styles.companyInfo}>
            <View style={styles.logoContainer}>
              <Image source={{ uri: transaction.logo }} style={styles.logo} />
            </View>
            <View>
              <Text style={styles.companyName}>{transaction.company}</Text>
              <Text style={styles.date}>{transaction.date}</Text>
            </View>
          </View>
          <Text style={styles.amount}>-${transaction.amount}</Text>
        </View>
      ))}
    </View>
  );
};

export default Transactions;

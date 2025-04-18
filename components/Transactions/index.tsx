import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Transactions = () => {
  // Sample transaction data
  const transactions = [
    {
      id: 1,
      company: "Amazon",
      logo: "https://logo.clearbit.com/amazon.com",
      date: "May 15, 2023",
      amount: -88,
    },
    {
      id: 2,
      company: "Netflix",
      logo: "https://logo.clearbit.com/netflix.com",
      date: "May 10, 2023",
      amount: -15.99,
    },
    {
      id: 3,
      company: "Starbucks",
      logo: "https://logo.clearbit.com/starbucks.com",
      date: "May 5, 2023",
      amount: -5.75,
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
          <Text style={styles.amount}>${transaction.amount}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e9e8e9",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  viewAll: {
    fontSize: 14,
    color: "#8aa908",
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#d1d1d1",
  },
  companyInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    overflow: "hidden",
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  companyName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  date: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9a161b",
  },
});

export default Transactions;

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SectionList,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { ITransaction } from "@/types";

import styles from "./styles.module";

const WeeklyExpenses = () => {
  const navigation = useNavigation();
  const [currentMonth, setCurrentMonth] = useState("April 2025");
  const router = useRouter();

  // Sample data structure - replace with your actual data
  const weeklyExpenses = [
    {
      week: "Week 1: April 1-6",
      total: 1011.0,
      remainder: 31.0,
      data: [
        { id: "1", name: "KFC", amount: 77.0, date: "April 1" },
        { id: "2", name: "Potato Corner", amount: 105.0, date: "April 2" },
        { id: "3", name: "Weed", amount: 200.0, date: "April 3" },
        { id: "4", name: "Vietnamese food", amount: 263.0, date: "April 4" },
        { id: "5", name: "Cash", amount: 200.0, date: "April 5" },
        { id: "6", name: "KFC (keeta)", amount: 120.0, date: "April 6" },
      ],
    },
    {
      week: "Week 2: April 7-13",
      total: 615.7,
      remainder: -81.7,
      data: [
        { id: "7", name: "McDonalds", amount: 51.0, date: "April 7" },
        { id: "8", name: "IKEA", amount: 136.0, date: "April 8" },
        { id: "9", name: "Wellcome", amount: 179.0, date: "April 9" },
        { id: "10", name: "7m", amount: 24.0, date: "April 10" },
        { id: "11", name: "Wellcome", amount: 164.8, date: "April 11" },
        { id: "12", name: "Saffron pay", amount: 35.0, date: "April 12" },
        { id: "13", name: "Onigiri", amount: 57.0, date: "April 13" },
      ],
    },
    {
      week: "Week 3: April 14-20",
      total: 415.0,
      remainder: 85.0,
      data: [
        { id: "14", name: "Church", amount: 115.0, date: "April 14" },
        { id: "15", name: "Haircut", amount: 100.0, date: "April 15" },
        { id: "16", name: "Weed", amount: 100.0, date: "April 16" },
        { id: "17", name: "Jollof", amount: 100.0, date: "April 17" },
      ],
    },
    {
      week: "Week 4: April 21-27",
      total: 581.0,
      remainder: 119.0,
      data: [
        { id: "18", name: "Curry", amount: 60.0, date: "April 21" },
        { id: "19", name: "Thai food", amount: 236.0, date: "April 22" },
        { id: "20", name: "7m", amount: 355.0, date: "April 23" },
        { id: "21", name: "Medonals", amount: 645.0, date: "April 24" },
        { id: "22", name: "Iced tea", amount: 69.0, date: "April 25" },
        { id: "23", name: "Weed", amount: 100.0, date: "April 26" },
        { id: "24", name: "7m", amount: 16.0, date: "April 27" },
      ],
    },
  ];

  const fixedExpenses = [
    { id: "f1", name: "Rent", amount: 6800.0 },
    { id: "f2", name: "Remi", amount: 2390.0 },
    { id: "f3", name: "Mum", amount: 500.0 },
    { id: "f4", name: "Anya", amount: 500.0 },
    { id: "f5", name: "Gym", amount: 550.0 },
    { id: "f6", name: "Phone bill", amount: 200.0 },
    { id: "f7", name: "Taobao", amount: 139219.0 },
    { id: "f8", name: "IUD", amount: 500.0 },
    { id: "f9", name: "Weed", amount: 100.0 },
    { id: "f10", name: "Octopus", amount: 810.0 },
    { id: "f11", name: "Flights (BKK)", amount: 2350.0 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome name="arrow-left" size={24} color="#B2DF01" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Monthly Expenses</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView>
        <View style={styles.monthHeader}>
          <Text style={styles.monthTitle}>{currentMonth}</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total Expenses:</Text>
            <Text style={styles.totalAmount}>$16,092.19</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Possible Savings:</Text>
            <Text style={styles.totalAmount}>$3,993.55</Text>
          </View>
        </View>

        <Text style={styles.sectionHeader}>Fixed Expenses</Text>
        <View style={styles.fixedExpensesContainer}>
          {fixedExpenses.map((expense) => (
            <View key={expense.id} style={styles.fixedExpenseItem}>
              <Text style={styles.expenseName}>{expense.name}</Text>
              <Text style={styles.expenseAmount}>
                ${expense.amount.toFixed(2)}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionHeader}>Weekly Breakdown</Text>
        <SectionList
          sections={weeklyExpenses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.expenseItem}>
              <View style={styles.expenseInfo}>
                <Text style={styles.expenseName}>{item.name}</Text>
                <Text style={styles.expenseDate}>{item.date}</Text>
              </View>
              <Text style={styles.expenseAmount}>
                ${item.amount.toFixed(2)}
              </Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.weekHeader}>
              <Text style={styles.weekTitle}>{section.week}</Text>
              <View style={styles.weekSummary}>
                <Text style={styles.weekTotal}>
                  Total: ${section.total.toFixed(2)}
                </Text>
                <Text
                  style={[
                    styles.weekRemainder,
                    section.remainder < 0 ? styles.negative : styles.positive,
                  ]}
                >
                  Remainder: ${section.remainder.toFixed(2)}
                </Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default WeeklyExpenses;

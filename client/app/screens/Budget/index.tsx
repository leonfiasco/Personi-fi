import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ProgressCircle, RecentTransactions, BudgetModal } from "@/components/";
import { useRouter } from "expo-router";
import { ITransaction } from "@/types";
import styles from "./styles.module";

const BudgetScreen = () => {
  const [weeklyBudget, setWeeklyBudget] = useState(0);
  const [currentSpending, setCurrentSpending] = useState(0);
  const [timeFrame, setTimeFrame] = useState<"Week" | "Month" | "Year">("Week");
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [showAllTransactions, setShowAllTransactions] = useState(false);
  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const router = useRouter();

  const monthlyBudget = Math.round(weeklyBudget * 4.33);
  const yearlyBudget = monthlyBudget * 12;
  const threeMonthBudget = monthlyBudget * 3;
  const sixMonthBudget = monthlyBudget * 6;
  const nineMonthBudget = monthlyBudget * 9;

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
    ];
    setTransactions(sampleTransactions);
    setCurrentSpending(
      sampleTransactions.reduce((sum, t) => sum + t.amount, 0)
    );
  }, []);

  const displayedTransactions = showAllTransactions
    ? transactions
    : transactions.slice(0, 3);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={
        weeklyBudget <= 0 ? styles.centerContent : undefined
      }
    >
      {weeklyBudget <= 0 ? (
        <View style={styles.setBudgetContainer}>
          <FontAwesome
            name="money"
            size={48}
            color="#B2DF01"
            style={styles.budgetIcon}
          />
          <Text style={styles.setBudgetTitle}>Set Your Budget</Text>
          <Text style={styles.setBudgetText}>
            To start tracking your spending, set your weekly budget
          </Text>
          <TouchableOpacity
            style={styles.setBudgetButton}
            onPress={() => setShowBudgetModal(true)}
          >
            <Text style={styles.setBudgetButtonText}>Set Budget</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={styles.budgetCard}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Budget Overview</Text>
              <View style={styles.headerActions}>
                <TouchableOpacity onPress={() => setShowBudgetModal(true)}>
                  <FontAwesome name="edit" size={20} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.weeklyButton}
                  onPress={() => router.push("/screens/WeeklyExpenses")}
                >
                  <Text style={styles.weeklyButtonText}>Weekly View</Text>
                  <FontAwesome name="chevron-right" size={16} color="#B2DF01" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.timeFrameTabs}>
              {["Week", "Month", "Year"].map((frame) => (
                <Pressable
                  key={frame}
                  style={[
                    styles.tabButton,
                    timeFrame === frame && styles.activeTab,
                  ]}
                  onPress={() => setTimeFrame(frame as any)}
                >
                  <Text
                    style={[
                      styles.tabText,
                      timeFrame === frame && styles.activeTabText,
                    ]}
                  >
                    {frame}
                  </Text>
                </Pressable>
              ))}
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
          <View style={styles.projectionCard}>
            <Text style={styles.sectionTitle}>Budget Projections</Text>
            <View style={styles.projectionGrid}>
              {[
                { label: "3 Months", value: threeMonthBudget },
                { label: "6 Months", value: sixMonthBudget },
                { label: "9 Months", value: nineMonthBudget },
                { label: "12 Months", value: yearlyBudget },
              ].map(({ label, value }) => (
                <View key={label} style={styles.projectionItem}>
                  <Text style={styles.projectionLabel}>{label}</Text>
                  <Text style={styles.projectionValue}>${value}</Text>
                </View>
              ))}
            </View>
          </View>
        </>
      )}

      <RecentTransactions
        transactions={displayedTransactions}
        weeklyBudget={weeklyBudget}
        setShowAllTransactions={setShowAllTransactions}
        showAllTransactions={false}
      />
      <BudgetModal
        showBudgetModal={showBudgetModal}
        setShowBudgetModal={setShowBudgetModal}
        weeklyBudget={weeklyBudget}
        setWeeklyBudget={setWeeklyBudget}
      />
    </ScrollView>
  );
};

export default BudgetScreen;

// BudgetSetup.tsx
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useBudget } from "@/context/BudgetContext";
import { styles } from "./styles.module";

const BudgetSetup = () => {
  const {
    weeklyBudget,
    monthlyBudget,
    yearlyBudget,
    setWeeklyBudget,
    setMonthlyBudget,
    setYearlyBudget,
  } = useBudget();

  const [editMode, setEditMode] = useState(false);
  const [tempWeekly, setTempWeekly] = useState(weeklyBudget.toString());
  const [tempMonthly, setTempMonthly] = useState(monthlyBudget.toString());
  const [tempYearly, setTempYearly] = useState(yearlyBudget.toString());

  const saveBudgets = () => {
    setWeeklyBudget(Number(tempWeekly));
    setMonthlyBudget(Number(tempMonthly));
    setYearlyBudget(Number(tempYearly));
    setEditMode(false);
  };

  return (
    <View style={styles.container}>
      {editMode ? (
        <>
          <TextInput
            style={styles.input}
            value={tempWeekly}
            onChangeText={setTempWeekly}
            keyboardType="numeric"
            placeholder="Weekly Budget"
          />
          <TextInput
            style={styles.input}
            value={tempMonthly}
            onChangeText={setTempMonthly}
            keyboardType="numeric"
            placeholder="Monthly Budget"
          />
          <TextInput
            style={styles.input}
            value={tempYearly}
            onChangeText={setTempYearly}
            keyboardType="numeric"
            placeholder="Yearly Budget"
          />
          <Pressable style={styles.button} onPress={saveBudgets}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </>
      ) : (
        <>
          <Text style={styles.budgetText}>
            Weekly: ${weeklyBudget.toLocaleString()}
          </Text>
          <Text style={styles.budgetText}>
            Monthly: ${monthlyBudget.toLocaleString()}
          </Text>
          <Text style={styles.budgetText}>
            Yearly: ${yearlyBudget.toLocaleString()}
          </Text>
          <Pressable style={styles.button} onPress={() => setEditMode(true)}>
            <Text style={styles.buttonText}>Edit Budgets</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default BudgetSetup;

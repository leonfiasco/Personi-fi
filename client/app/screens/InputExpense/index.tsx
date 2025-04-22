import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import { FontAwesome, MaterialIcons, Feather } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useAddExpense } from "../../../hooks/Expenses/useAddExpense";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { IconName, ICategory } from "../../../types";

import styles from "./styles.module";

const defaultCategories = [
  { id: "1", name: "Food", icon: "cutlery", color: "#FF5252" },
  { id: "2", name: "Transport", icon: "bus", color: "#FF4081" },
  { id: "3", name: "Shopping", icon: "shopping-bag", color: "#E040FB" },
  { id: "4", name: "Entertainment", icon: "gamepad", color: "#7C4DFF" },
  { id: "5", name: "Other", icon: "ellipsis-h", color: "#536DFE" },
];

export default function AddExpenseScreen() {
  const [amount, setAmount] = useState("");
  const [merchant, setMerchant] = useState("");
  const [categories, setCategories] = useState(defaultCategories);
  const [transactionType, setTransactionType] = useState("expense");

  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryColor, setNewCategoryColor] = useState("#FF5252");

  const router = useRouter();
  const params = useLocalSearchParams();

  const formatCurrency = (value: string) => {
    const cleanValue = value.replace(/\D/g, "");
    if (!cleanValue) return "";
    const formattedValue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "HKD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(cleanValue) / 100);
    return formattedValue;
  };

  const handleAmountChange = (text: string) => {
    const formatted = formatCurrency(text);
    setAmount(formatted);
  };

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      const newCategory: ICategory = {
        id: Date.now().toString(),
        name: newCategoryName,
        icon: "plus" as IconName,
        color: newCategoryColor,
      };

      setCategories([...categories, newCategory]);
      setSelectedCategory(newCategory);
      setNewCategoryName("");
      setIsModalVisible(false);
    }
  };

  const { addExpense, isLoading, error, success } = useAddExpense();

  const handleSubmit = async () => {
    if (!selectedCategory) {
      Alert.alert("Error", "Please select a category");
      return;
    }

    if (!amount) {
      Alert.alert("Error", "Please enter an amount");
      return;
    }

    try {
      await addExpense({
        transactionCategory: selectedCategory.name,
        transactionAmount: amount,
        transactionMerchant: merchant,
      });

      Alert.alert("Success", "Expense added successfully", [
        {
          text: "OK",
          onPress: () => router.push("/"),
        },
      ]);
    } catch (err) {
      // Error is already handled by the hook
    }
  };

  return (
    <LinearGradient
      colors={["#FFF5F5", "#FFEBEE"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.filterBox}>
          <View style={styles.headerRow}>
            <TouchableOpacity
              onPress={() => {
                if (params.fromBudgetScreen === "true") {
                  router.push("/screens/Budget");
                } else {
                  router.push("/");
                }
              }}
            >
              <Ionicons name="arrow-back" size={24} color="#D32F2F" />
            </TouchableOpacity>
            <Text style={styles.header}>Add Expense</Text>
            <View style={{ width: 24 }} />
          </View>

          {/* Transaction Type */}
          <Text style={styles.label}>Transaction Type</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                transactionType === "income" &&
                  styles.optionButtonSelectedIncome,
              ]}
              onPress={() => router.push("/screens/InputIncome")}
            >
              <Feather
                name="arrow-down"
                size={16}
                color={transactionType === "income" ? "#388E3C" : "#666"}
              />
              <Text
                style={[
                  styles.optionText,
                  transactionType === "income" &&
                    styles.optionTextSelectedIncome,
                ]}
              >
                Income
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                transactionType === "expense" &&
                  styles.optionButtonSelectedExpense,
              ]}
              onPress={() => setTransactionType("expense")}
            >
              <Feather
                name="arrow-up"
                size={16}
                color={transactionType === "expense" ? "#D32F2F" : "#666"}
              />
              <Text
                style={[
                  styles.optionText,
                  transactionType === "expense" &&
                    styles.optionTextSelectedExpense,
                ]}
              >
                Expense
              </Text>
            </TouchableOpacity>
          </View>

          {/* Transaction Category */}
          <Text style={styles.label}>Transaction Category</Text>
          <View style={styles.buttonRow}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  selectedCategory?.id === category.id &&
                    styles.categoryButtonSelected,
                  { borderColor: category.color },
                ]}
                onPress={() => setSelectedCategory(category as ICategory)}
              >
                <FontAwesome
                  name={category.icon as IconName}
                  size={16}
                  color={category.color}
                />
                <Text style={[styles.categoryText, { color: category.color }]}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={[styles.categoryButton, styles.addCategoryButton]}
              onPress={() => setIsModalVisible(true)}
            >
              <Feather name="plus" size={16} color="#D32F2F" />
              <Text style={[styles.categoryText, { color: "#D32F2F" }]}>
                Custom
              </Text>
            </TouchableOpacity>
          </View>

          {/* Transaction Amount */}
          <Text style={styles.label}>Transaction Amount</Text>
          <View style={styles.textInputWrapper}>
            <FontAwesome name="dollar" size={16} color="#999" />
            <TextInput
              style={styles.textInput}
              placeholder="$0.00"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={amount}
              onChangeText={handleAmountChange}
              onFocus={() => {
                if (!amount) setAmount("$");
              }}
              onBlur={() => {
                if (amount === "$") setAmount("");
              }}
            />
            <Text style={[styles.currency, { color: "#D32F2F" }]}>HKD</Text>
          </View>

          {/* Transaction Merchant */}
          <Text style={styles.label}>Transaction Merchant</Text>
          <View style={styles.textInputWrapper}>
            <FontAwesome name="shopping-bag" size={16} color="#999" />
            <TextInput
              style={styles.textInput}
              placeholder="Amazon Shopping"
              placeholderTextColor="#888"
              value={merchant}
              onChangeText={setMerchant}
            />
          </View>

          <TouchableOpacity
            style={styles.applyButton}
            onPress={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <>
                <Text style={styles.applyButtonText}>Add Expense</Text>
                <Feather
                  name="plus-circle"
                  size={18}
                  color="#fff"
                  style={{ marginLeft: 8 }}
                />
              </>
            )}
          </TouchableOpacity>
        </View>

        {/* Add Category Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add Custom Category</Text>

              <Text style={styles.label}>Category Name</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Enter category name"
                value={newCategoryName}
                onChangeText={setNewCategoryName}
              />

              <Text style={styles.label}>Color</Text>
              <View style={styles.colorOptions}>
                {[
                  "#FF5252",
                  "#FF4081",
                  "#E040FB",
                  "#7C4DFF",
                  "#536DFE",
                  "#607D8B",
                ].map((color) => (
                  <Pressable
                    key={color}
                    style={[
                      styles.colorOption,
                      { backgroundColor: color },
                      newCategoryColor === color && styles.selectedColorOption,
                    ]}
                    onPress={() => setNewCategoryColor(color)}
                  />
                ))}
              </View>

              <View style={styles.modalButtonRow}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => setIsModalVisible(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.addButton]}
                  onPress={handleAddCategory}
                  disabled={!newCategoryName.trim()}
                >
                  <Text style={styles.addButtonText}>Add Category</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </LinearGradient>
  );
}

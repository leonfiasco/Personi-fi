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
  Switch,
  Platform,
  Alert,
} from "react-native";
import { FontAwesome, Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./styles.module";
import { useAddIncome } from "@/hooks/Income/useAddIncome";

// Category data with colors
const defaultCategories = [
  { id: "1", name: "Salary", icon: "money", color: "#4CAF50" },
  { id: "2", name: "Freelance", icon: "laptop", color: "#2196F3" },
  { id: "3", name: "Investment", icon: "line-chart", color: "#FF9800" },
  { id: "4", name: "Gift", icon: "gift", color: "#E91E63" },
  { id: "5", name: "Other", icon: "ellipsis-h", color: "#9C27B0" },
];

// Payment methods
const paymentMethods = [
  { id: "1", name: "Cash", icon: "money" },
  { id: "2", name: "Credit Card", icon: "credit-card" },
  { id: "3", name: "Bank Transfer", icon: "bank" },
  { id: "4", name: "PayPal", icon: "paypal" },
  { id: "5", name: "Other", icon: "ellipsis-h" },
];

// Recurrence patterns
const recurrencePatterns = [
  { id: "daily", name: "Daily" },
  { id: "weekly", name: "Weekly" },
  { id: "monthly", name: "Monthly" },
  { id: "yearly", name: "Yearly" },
];

export default function AddIncomeScreen() {
  type IconName =
    | "money"
    | "laptop"
    | "line-chart"
    | "gift"
    | "ellipsis-h"
    | "percent"
    | "plus"
    | "filter"
    | "header"
    | "bold"
    | "medium"
    | "key"
    | "sort"
    | "map"
    | "at"
    | "search"
    | "repeat"
    | "anchor"
    | "meetup";

  type Category = {
    id: string;
    name: string;
    icon: IconName;
    color: string;
  };

  type PaymentMethod = {
    id: string;
    name: string;
    icon: IconName;
  };

  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [merchant, setMerchant] = useState("");
  const [categories, setCategories] = useState(defaultCategories);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurrencePattern, setRecurrencePattern] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryColor, setNewCategoryColor] = useState("#62a40a");

  const { addIncome, isLoading, error, success } = useAddIncome();

  const navigation = useNavigation();
  const router = useRouter();

  const formatCurrency = (value: string) => {
    const cleanValue = value.replace(/\D/g, "");
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
      const newCategory: Category = {
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

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const handleSubmit = async () => {
    // Validate and submit the form
    const incomeData = {
      source: selectedCategory?.id || "",
      amount: parseFloat(amount.replace(/[^0-9.-]+/g, "")),
      merchant,
      date,
      isRecurring,
      recurrencePattern: isRecurring ? recurrencePattern : undefined,
      notes,
      paymentMethod: selectedPaymentMethod?.id,
    };

    console.log("Submitting income:", incomeData);
    // Here you would typically send this data to your API

    try {
      await addIncome(incomeData);

      Alert.alert("Success", "Income added successfully", [
        {
          text: "OK",
          onPress: () => router.push("/"),
        },
      ]);
    } catch (error) {}
  };

  return (
    <LinearGradient
      colors={["#F5FFF5", "#E8F5E9"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Ionicons name="arrow-back" size={24} color="olive" />
          </TouchableOpacity>
          <Text style={styles.header}>Add Income</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          {/* Transaction Type */}
          <View style={styles.sectionContainer}>
            <Text style={styles.label}>Transaction Type</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.optionButtonSelected}>
                <Feather name="arrow-down" size={16} color="#62a40a" />
                <Text style={styles.optionTextSelected}>Income</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => router.push("/screens/InputExpense")}
              >
                <Feather name="arrow-up" size={16} color="#666" />
                <Text style={styles.optionText}>Expense</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Income Source */}
          <View style={styles.sectionContainer}>
            <Text style={styles.label}>Income Source</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryScroll}
            >
              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  style={[
                    styles.categoryButton,
                    selectedCategory?.id === category.id &&
                      styles.categoryButtonSelected,
                    { borderColor: category.color },
                  ]}
                  onPress={() => setSelectedCategory(category)}
                >
                  <FontAwesome
                    name={category.icon}
                    size={16}
                    color={category.color}
                  />
                  <Text
                    style={[styles.categoryText, { color: category.color }]}
                  >
                    {category.name}
                  </Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                style={[styles.categoryButton, styles.addCategoryButton]}
                onPress={() => setIsModalVisible(true)}
              >
                <Feather name="plus" size={16} color="#62a40a" />
                <Text style={[styles.categoryText, { color: "#62a40a" }]}>
                  Custom
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Amount */}
          <View style={styles.sectionContainer}>
            <Text style={styles.label}>Amount</Text>
            <View style={styles.textInputWrapper}>
              <FontAwesome name="dollar" size={16} color="#999" />
              <TextInput
                style={styles.textInput}
                placeholder="$0.00"
                placeholderTextColor="#888"
                keyboardType="numeric"
                value={amount}
                onChangeText={handleAmountChange}
              />
              <Text style={styles.currency}>HKD</Text>
            </View>
          </View>

          {/* Merchant */}
          <View style={styles.sectionContainer}>
            <Text style={styles.label}>Merchant/Source</Text>
            <View style={styles.textInputWrapper}>
              <FontAwesome name="shopping-bag" size={16} color="#999" />
              <TextInput
                style={styles.textInput}
                placeholder="Company name or source"
                placeholderTextColor="#888"
                value={merchant}
                onChangeText={setMerchant}
              />
            </View>
          </View>

          {/* Payment Method */}
          <View style={styles.sectionContainer}>
            <Text style={styles.label}>Payment Method</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryScroll}
            >
              {paymentMethods.map((method) => (
                <TouchableOpacity
                  key={method.id}
                  style={[
                    styles.categoryButton,
                    selectedPaymentMethod?.id === method.id &&
                      styles.categoryButtonSelected,
                    { borderColor: "#999" },
                  ]}
                  onPress={() => setSelectedPaymentMethod(method)}
                >
                  <FontAwesome
                    name={method.icon as any}
                    size={16}
                    color="#666"
                  />
                  <Text style={[styles.categoryText, { color: "#666" }]}>
                    {method.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Date */}
          <View style={styles.sectionContainer}>
            <Text style={styles.label}>Date</Text>
            <TouchableOpacity
              style={styles.textInputWrapper}
              onPress={() => setShowDatePicker(true)}
            >
              <TextInput
                style={styles.textInput}
                placeholder="Select date"
                placeholderTextColor="#888"
                value={formatDate(date)}
                editable={false}
              />
              <Feather name="calendar" size={16} color="#999" />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={handleDateChange}
              />
            )}
          </View>

          {/* Recurring Transaction */}
          <View style={[styles.sectionContainer, styles.switchContainer]}>
            <Text style={styles.label}>Recurring Income</Text>
            <Switch
              value={isRecurring}
              onValueChange={setIsRecurring}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isRecurring ? "#f5dd4b" : "#f4f3f4"}
            />
          </View>

          {/* Recurrence Pattern (conditional) */}
          {isRecurring && (
            <View style={styles.sectionContainer}>
              <Text style={styles.label}>Recurrence Pattern</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryScroll}
              >
                {recurrencePatterns.map((pattern) => (
                  <TouchableOpacity
                    key={pattern.id}
                    style={[
                      styles.categoryButton,
                      recurrencePattern === pattern.id &&
                        styles.categoryButtonSelected,
                      { borderColor: "#999" },
                    ]}
                    onPress={() => setRecurrencePattern(pattern.id)}
                  >
                    <Text style={[styles.categoryText, { color: "#666" }]}>
                      {pattern.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}

          {/* Notes */}
          <View style={styles.sectionContainer}>
            <Text style={styles.label}>Notes</Text>
            <TextInput
              style={[styles.textInput, styles.notesInput]}
              placeholder="Additional notes (optional)"
              placeholderTextColor="#888"
              multiline
              value={notes}
              onChangeText={setNotes}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.applyButton} onPress={handleSubmit}>
            <Text style={styles.applyButtonText}>Add Income</Text>
            <Feather
              name="plus-circle"
              size={18}
              color="#fff"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
        </ScrollView>

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
                  "#4CAF50",
                  "#2196F3",
                  "#FF9800",
                  "#E91E63",
                  "#9C27B0",
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
      </View>
    </LinearGradient>
  );
}

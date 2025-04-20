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
} from "react-native";
import { FontAwesome, Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

// Category data with colors
const defaultCategories = [
  { id: "1", name: "Salary", icon: "money", color: "#4CAF50" },
  { id: "2", name: "Freelance", icon: "laptop", color: "#2196F3" },
  { id: "3", name: "Investment", icon: "line-chart", color: "#FF9800" },
  { id: "4", name: "Gift", icon: "gift", color: "#E91E63" },
  { id: "5", name: "Other", icon: "ellipsis-h", color: "#9C27B0" },
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

  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [merchant, setMerchant] = useState("");
  const [categories, setCategories] = useState(defaultCategories);

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryColor, setNewCategoryColor] = useState("#62a40a");

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

  return (
    <LinearGradient
      colors={["#F5FFF5", "#E8F5E9"]} // Light green hues
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.filterBox}>
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => router.push("/")}>
              <Ionicons name="arrow-back" size={24} color="olive" />
            </TouchableOpacity>
            <Text style={styles.header}>Add Income</Text>
            <View style={{ width: 24 }} />
          </View>

          {/* Transaction Type */}
          <Text style={styles.label}>Transaction Type</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.optionButtonSelected}>
              <Feather name="arrow-down" size={16} color="#62a40a" />
              <Text style={styles.optionTextSelected}>Income</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => router.push("/screens/input-expense")}
            >
              <Feather name="arrow-up" size={16} color="#666" />
              <Text style={styles.optionText}>Expense</Text>
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
                onPress={() => setSelectedCategory(category as Category)}
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
              <Feather name="plus" size={16} color="#62a40a" />
              <Text style={[styles.categoryText, { color: "#62a40a" }]}>
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
            />
            <Text style={styles.currency}>HKD</Text>
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

          {/* Date */}
          <Text style={styles.label}>Date</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="MM/DD/YYYY"
              placeholderTextColor="#888"
              value={date}
              onChangeText={setDate}
            />
            <Feather name="calendar" size={16} color="#999" />
          </View>

          {/* Add Income Button */}
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Add Income</Text>
            <Feather
              name="plus-circle"
              size={18}
              color="#fff"
              style={{ marginLeft: 8 }}
            />
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
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    justifyContent: "center", // Centers vertically
  },
  filterBox: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 20,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#C8E6C9", // Light green border
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
    maxHeight: "90%",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
  },
  resetText: {
    color: "#62a40a",
    fontWeight: "bold",
  },
  label: {
    marginTop: 20,
    marginBottom: 8,
    fontWeight: "500",
  },
  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    marginBottom: 8,
  },
  categoryButtonSelected: {
    backgroundColor: "#f6fee7",
  },
  categoryText: {
    marginLeft: 6,
    fontWeight: "500",
  },
  addCategoryButton: {
    borderColor: "#62a40a",
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    marginRight: 8,
    marginBottom: 8,
  },
  optionButtonSelected: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#62a40a",
    backgroundColor: "#f6fee7",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  optionText: {
    marginLeft: 6,
    color: "#555",
  },
  optionTextSelected: {
    marginLeft: 6,
    color: "#62a40a",
    fontWeight: "bold",
  },
  textInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#62a40a",
    backgroundColor: "#f6fee7",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    gap: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  currency: {
    fontWeight: "bold",
    color: "#62a40a",
  },
  applyButton: {
    backgroundColor: "#62a40a",
    borderRadius: 20,
    paddingVertical: 14,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  colorOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  selectedColorOption: {
    borderWidth: 3,
    borderColor: "#333",
  },
  modalButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#f1f1f1",
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "#62a40a",
    marginLeft: 10,
  },
  cancelButtonText: {
    color: "#333",
    fontWeight: "bold",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

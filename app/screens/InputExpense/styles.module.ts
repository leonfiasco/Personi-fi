import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    borderColor: "#FFCDD2",
    width: "100%", // Takes full width but constrained by padding
    maxWidth: 400, // Maximum width on larger screens
    alignSelf: "center", // Centers horizontally
    maxHeight: "90%", // Prevents touching screen edges
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    color: "#D32F2F",
  },
  resetText: {
    color: "#D32F2F",
    fontWeight: "bold",
  },
  label: {
    marginTop: 20,
    marginBottom: 8,
    fontWeight: "500",
    color: "#555",
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
    backgroundColor: "#FFEBEE",
  },
  categoryText: {
    marginLeft: 6,
    fontWeight: "500",
  },
  addCategoryButton: {
    borderColor: "#D32F2F",
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
  optionButtonSelectedExpense: {
    borderColor: "#D32F2F",
    backgroundColor: "#FFEBEE",
  },
  optionButtonSelectedIncome: {
    borderColor: "#388E3C",
    backgroundColor: "#E8F5E9",
  },
  optionText: {
    marginLeft: 6,
    color: "#555",
  },
  optionTextSelectedExpense: {
    marginLeft: 6,
    color: "#D32F2F",
    fontWeight: "bold",
  },
  optionTextSelectedIncome: {
    marginLeft: 6,
    color: "#388E3C",
    fontWeight: "bold",
  },
  textInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#D32F2F",
    backgroundColor: "#FFEBEE",
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
  },
  applyButton: {
    backgroundColor: "#D32F2F",
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
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    elevation: 5,
    borderWidth: 1,
    borderColor: "#FFCDD2",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#D32F2F",
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#FFCDD2",
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
    backgroundColor: "#D32F2F",
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

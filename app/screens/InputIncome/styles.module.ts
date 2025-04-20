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

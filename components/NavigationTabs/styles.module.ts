import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Default styles
  container: {
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  tabContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 4,
    width: "100%",
    maxWidth: 400,
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  tabButton: {
    flex: 1,
  },
  tabContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "black",
  },
  tabText: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "normal",
  },
  activeTabText: {
    color: "white",
  },

  // Budget variant styles
  budgetContainer: {
    paddingBottom: 10, // Reduced padding for budget variant
  },
  budgetTabContainer: {
    // backgroundColor: "transparent", // No background for budget variant
    borderRadius: 0, // No rounded corners
    padding: 0, // No padding
  },
  budgetTabContent: {
    paddingVertical: 12, // Slightly different padding
    borderBottomWidth: 2, // Add bottom border
    // borderBottomColor: "transparent", // Default to transparent
    // backgroundColor: "transparent", // No background
  },
  budgetActiveTab: {
    // backgroundColor: "transparent", // No background for active tab
    borderBottomColor: "black", // Black bottom border for active tab
  },
  budgetTabText: {
    fontWeight: "500", // Slightly bolder text
  },
  budgetActiveTabText: {
    color: "black", // Keep text black when active
    fontWeight: "600", // Even bolder for active tab
  },
});

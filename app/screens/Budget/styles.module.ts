import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  budgetCard: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    elevation: 2,
  },
  projectionCard: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    elevation: 2,
  },
  transactionsCard: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
  },
  timeFrameTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  tabText: {
    fontSize: 14,
    color: "#666",
  },
  activeTabText: {
    color: "#000",
    fontWeight: "600",
  },
  budgetSummary: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    paddingTop: 16,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
    color: "#666",
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  projectionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  projectionItem: {
    width: "48%",
    backgroundColor: "#F9F9F9",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
  },
  projectionLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  projectionValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4CAF50",
  },
  transactionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    marginTop: 8,
  },
  viewAllText: {
    color: "#666",
    marginRight: 8,
    fontWeight: "500",
  },
});

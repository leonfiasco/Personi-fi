import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  progressContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  circleContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  circleBackground: {
    position: "absolute",
    borderWidth: 2,
    borderColor: "#B2DF01",
    justifyContent: "center",
    alignItems: "center",
  },
  gap: {
    position: "absolute",
    bottom: -2,
    width: 40, // Increased gap width (previously 20-30)
    height: 6, // Slightly taller gap
    backgroundColor: "#F9F9F9",
    transform: [{ translateX: 0 }], // Centers the wider gap
  },
  progressCircle: {
    position: "absolute",
    borderWidth: 2,
    borderColor: "transparent",
    overflow: "hidden",
  },
  progressMask: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 100,
  },
  circleInner: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    alignItems: "center",
  },
  budgetAmount: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 4,
    fontFamily: "PlaywriteDE-Grund",
  },
  budgetLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  spentAmount: {
    fontSize: 16,
    color: "#666",
    fontFamily: "PlaywriteDE-Grund",
  },
  timeFrameSelector: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 4,
  },
  timeFrameButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  activeTimeFrame: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  timeFrameText: {
    fontSize: 14,
    color: "#666",
  },
  activeTimeFrameText: {
    color: "#000",
    fontWeight: "600",
  },
});

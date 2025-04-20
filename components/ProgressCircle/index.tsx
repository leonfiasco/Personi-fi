import { IProgressCircle } from "@/types";
import React from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";

const ProgressCircle: React.FC<IProgressCircle> = ({
  weeklyBudget,
  currentSpending,
  timeFrame,
  setTimeFrame,
}) => {
  const percentageSpent = Math.min((currentSpending / weeklyBudget) * 100, 100);
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (percentageSpent / 100) * circumference;
  const gapSize = 20; // Adjust this to change the size of the gap

  return (
    <View style={styles.progressContainer}>
      <View style={styles.circleContainer}>
        {/* Background circle (full circle with gap) */}
        <View
          style={[
            styles.circleBackground,
            {
              width: radius * 2 + 20,
              height: radius * 2 + 20,
              borderRadius: radius + 10,
            },
          ]}
        >
          <View style={styles.gap} />
        </View>

        {/* Progress indicator */}
        <View
          style={[
            styles.progressCircle,
            {
              width: radius * 2,
              height: radius * 2,
              borderRadius: radius,
            },
          ]}
        >
          <View
            style={[
              styles.progressMask,
              {
                transform: [{ rotate: `${-90 + gapSize / 2}deg` }],
                borderTopColor: percentageSpent > 0 ? "#B2DF01" : "transparent",
                borderRightColor:
                  percentageSpent > 25 ? "#B2DF01" : "transparent",
                borderBottomColor:
                  percentageSpent > 50 ? "#B2DF01" : "transparent",
                borderLeftColor:
                  percentageSpent > 75 ? "#B2DF01" : "transparent",
              },
            ]}
          />
        </View>

        {/* Inner circle */}
        <View style={styles.circleInner}>
          <Text style={styles.budgetAmount}>
            ${weeklyBudget.toLocaleString()}
          </Text>
          <Text style={styles.budgetLabel}>Weekly Budget</Text>
          <Text style={styles.spentAmount}>
            ${currentSpending.toLocaleString()} spent
          </Text>
        </View>
      </View>

      <View style={styles.timeFrameSelector}>
        {/* <Pressable
          style={[
            styles.timeFrameButton,
            timeFrame === "Day" && styles.activeTimeFrame,
          ]}
          onPress={() => setTimeFrame("Day")}
        >
          <Text
            style={[
              styles.timeFrameText,
              timeFrame === "Day" && styles.activeTimeFrameText,
            ]}
          >
            Day
          </Text>
        </Pressable> */}
        <Pressable
          style={[
            styles.timeFrameButton,
            timeFrame === "Week" && styles.activeTimeFrame,
          ]}
          onPress={() => setTimeFrame("Week")}
        >
          <Text
            style={[
              styles.timeFrameText,
              timeFrame === "Week" && styles.activeTimeFrameText,
            ]}
          >
            Week
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.timeFrameButton,
            timeFrame === "Month" && styles.activeTimeFrame,
          ]}
          onPress={() => setTimeFrame("Month")}
        >
          <Text
            style={[
              styles.timeFrameText,
              timeFrame === "Month" && styles.activeTimeFrameText,
            ]}
          >
            Month
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ProgressCircle;

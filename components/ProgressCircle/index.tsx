import { IProgressCircle } from "@/types";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { styles } from "./styles.module";

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

export default ProgressCircle;

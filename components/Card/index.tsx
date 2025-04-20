import { Box, Text, HStack, VStack } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { MotiView, MotiText } from "moti";

import { styles } from "./styles.module";

export default function Card({}) {
  return (
    <MotiView
      from={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", damping: 20 }}
      style={styles.cardContainer}
    >
      {/* Background circles with continuous animation */}
      <MotiView
        from={{
          opacity: 0,
          scale: 0.8,
          translateX: -20,
          translateY: -20,
        }}
        animate={{
          opacity: 0.6,
          scale: 1,
          translateX: [0, 10, 0, -10, 0],
          translateY: [0, -10, 0, 10, 0],
        }}
        transition={{
          type: "timing",
          duration: 8000,
          loop: true,
        }}
        style={styles.topRightCircle}
      />

      <MotiView
        from={{
          opacity: 0,
          scale: 0.8,
          translateX: 20,
          translateY: 20,
        }}
        animate={{
          opacity: 0.6,
          scale: 1,
          translateX: [0, -15, 0, 15, 0],
          translateY: [0, 15, 0, -15, 0],
        }}
        transition={{
          type: "timing",
          duration: 10000,
          loop: true,
        }}
        style={styles.bottomLeftCircle}
      />

      <MotiView
        from={{
          opacity: 0,
          scale: 0.8,
          translateX: 30,
          translateY: -30,
        }}
        animate={{
          opacity: 0.6,
          scale: 1,
          translateX: [0, -20, 0, 20, 0],
          translateY: [0, 20, 0, -20, 0],
        }}
        transition={{
          type: "timing",
          duration: 12000,
          loop: true,
        }}
        style={styles.bottomFarLeftCircle}
      />

      {/* Rest of your card content remains exactly the same */}
      <VStack style={styles.totalContainer}>
        <MotiText
          from={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 500, delay: 200 }}
          style={styles.totalLabel}
        >
          Current Total 💰
        </MotiText>
        <MotiText
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 10, delay: 300 }}
          style={styles.totalAmount}
        >
          $8,270.00
        </MotiText>
      </VStack>

      <VStack style={styles.updatedContainer}>
        <MotiText
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "timing", duration: 500, delay: 400 }}
          style={styles.updatedText}
        >
          Updated: 12/04/25
        </MotiText>
      </VStack>

      {/* White rectangle with split sections */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "spring", delay: 500 }}
        style={styles.whiteCard}
      >
        <HStack>
          {/* Income Section */}
          <MotiView
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: "timing", duration: 600, delay: 600 }}
            style={styles.incomeSection}
          >
            <MotiText
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "timing", duration: 300, delay: 700 }}
              style={styles.incomeLabel}
            >
              Income
            </MotiText>
            <MotiText
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "timing", duration: 300, delay: 750 }}
              style={styles.incomeAmount}
            >
              $5,420.00
            </MotiText>
          </MotiView>

          {/* Expense Section */}
          <MotiView
            from={{ opacity: 0, translateX: 20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: "timing", duration: 600, delay: 600 }}
            style={styles.expenseSection}
          >
            <MotiText
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "timing", duration: 300, delay: 700 }}
              style={styles.expenseLabel}
            >
              Expense
            </MotiText>
            <MotiText
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "timing", duration: 300, delay: 750 }}
              style={styles.expenseAmount}
            >
              $2,850.00
            </MotiText>
          </MotiView>
        </HStack>
      </MotiView>
    </MotiView>
  );
}

import { Box, Text, HStack, VStack } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { MotiView, MotiText } from "moti";

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

// Your existing styles remain exactly the same
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#B2DF01",
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#B2DF01",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    overflow: "hidden",
    position: "relative",
  },
  topRightCircle: {
    position: "absolute",
    top: -50,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#6B8E23",
    opacity: 0.6,
  },
  bottomLeftCircle: {
    position: "absolute",
    bottom: -30,
    left: -30,
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: "#6B8E23",
    opacity: 0.6,
  },
  bottomFarLeftCircle: {
    position: "absolute",
    bottom: -50,
    left: -80,
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: "#6B8E23",
    opacity: 0.6,
  },
  totalContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  updatedContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  whiteCard: {
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  incomeSection: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#E5E5E5",
  },
  expenseSection: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },
  totalLabel: {
    color: "#262727",
    fontSize: 18,
    marginBottom: 24,
    fontFamily: "PlaywriteDE-Grund",
  },
  totalAmount: {
    color: "#262727",
    fontSize: 45,
    fontWeight: "bold",
    fontFamily: "Winky",
  },
  updatedText: {
    color: "#262727",
    fontSize: 14,
    fontFamily: "PlaywriteDE-Grund",
  },
  incomeLabel: {
    color: "#8aa908",
    fontWeight: "bold",
    fontFamily: "PlaywriteDE-Grund",
    fontSize: 16,
  },
  incomeAmount: {
    fontSize: 16,
    marginTop: 4,
    fontFamily: "PlaywriteDE-Grund",
    fontWeight: "600",
  },
  expenseLabel: {
    color: "#9a161b",
    fontWeight: "bold",
    fontFamily: "PlaywriteDE-Grund",
    fontSize: 16,
  },
  expenseAmount: {
    fontSize: 16,
    marginTop: 4,
    fontFamily: "PlaywriteDE-Grund",
    fontWeight: "600",
  },
});

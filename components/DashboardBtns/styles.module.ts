import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 15,
    marginBottom: 16,
  },
  carouselContent: {
    paddingHorizontal: 16,
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 12,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#737373",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginHorizontal: 8,
  },
  buttonContent: {
    alignItems: "center",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
    backgroundColor: "transparent", // Ensure background is transparent
  },
  buttonText: {
    fontWeight: "normal",
    fontSize: 12,
    marginTop: 4,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#d4d4d4",
    marginHorizontal: 3,
  },
  paginationDotActive: {
    backgroundColor: "#737373",
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

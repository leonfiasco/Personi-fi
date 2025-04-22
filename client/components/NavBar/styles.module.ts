import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  borderWrapper: {},
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16, // Keep horizontal padding
    paddingTop: 45,
    paddingBottom: 20,
    backgroundColor: "transparent",
    zIndex: 100,
  },
  circleButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#e6e7e6",
    justifyContent: "center",
    alignItems: "center",
  },
  userImageContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginLeft: 16,
    overflow: "hidden",
  },
  userImage: {
    width: "100%",
    height: "100%",
  },
  rightIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const NavBar = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      {/* Added a wrapper View for the border */}
      <View style={styles.borderWrapper}>
        <View style={styles.container}>
          {/* Left side - Burger menu */}
          <TouchableOpacity style={styles.circleButton}>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>

          {/* Right side - Icons */}
          <View style={styles.rightIconsContainer}>
            {/* Bell icon */}
            <TouchableOpacity style={styles.circleButton}>
              <MaterialIcons name="notifications" size={24} color="black" />
            </TouchableOpacity>

            {/* User image */}
            <TouchableOpacity style={styles.userImageContainer}>
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/women/44.jpg",
                }}
                style={styles.userImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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

export default NavBar;

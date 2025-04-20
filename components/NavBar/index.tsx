import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

import { styles } from "./styles.module";

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
                  uri: "https://randomuser.me/api/portraits/women/77.jpg",
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

export default NavBar;

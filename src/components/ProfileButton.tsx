import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

import { COLORS } from "../theme/styles/theme";

import { View } from "react-native";

// Define the prop types for the CustomButton component
interface CustomButtonProps {
  // leftIcon?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  title: string; // Title of the button
  onPress: (event: GestureResponderEvent) => void; // Function to call when the button is pressed
  buttonStyle?: StyleProp<ViewStyle>; // Optional custom style for the button container
  textStyle?: StyleProp<TextStyle>; // Optional custom style for the text
  disabled?: boolean; // Flag to disable the button (default is false)
}

const ProfileButton: React.FC<CustomButtonProps> = ({
  rightIcon,
  leftIcon,

  title,
  onPress,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      // Disable the button functionality
    >
      {/* Title text with optional custom style */}
      <View style={styles.buttonContainer}>
        <View style={styles.inbuttonContainer}>
          {leftIcon}
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </View>
        <View>{rightIcon}</View>
      </View>
    </TouchableOpacity>
  );
};

// Styles for the CustomButton component
const styles = StyleSheet.create({
  button: {
    height:65,
    justifyContent: "center",
    // borderRadius: RADIUS.lllg,
    // marginTop: SPACING.ssm,
    backgroundColor: COLORS.white,
   
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  inbuttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  text: {
    color: COLORS.black,
    fontSize: 16,
    fontFamily: "Poppins",
    letterSpacing: 0.15,
    // fontWeight: Weights.bold,
  },
});

export default ProfileButton;

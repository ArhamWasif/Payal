import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import { View } from 'react-native';
import { hp } from '../theme/styles/dimensions';

// Define the prop types for the CustomButton component
interface CustomButtonProps {
  rightIcon?: boolean;
  leftIcon?: boolean;
  title: string; // Title of the button
  onPress: (event: GestureResponderEvent) => void; // Function to call when the button is pressed
  buttonStyle?: StyleProp<ViewStyle>; // Optional custom style for the button container
  textStyle?: StyleProp<TextStyle>; // Optional custom style for the text
  disabled?: boolean; // Flag to disable the button (default is false)
}

const CustomButton: React.FC<CustomButtonProps> = ({
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
    height: 40,
    justifyContent: 'center',
    borderRadius: 50,
 width:"100%",
    backgroundColor: 'white',
   
    
  },
  buttonContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,

  },
  inbuttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  text: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Jost',
   
    fontWeight: 400,
  },
});

export default CustomButton;

import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
interface ButtonProps {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>; // Optional custom style for the button container
  textStyle?: StyleProp<TextStyle>;
  
}

const Button: React.FC<ButtonProps> = ({ title, buttonStyle, textStyle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonTxt}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonTxt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {},
});
export default Button;

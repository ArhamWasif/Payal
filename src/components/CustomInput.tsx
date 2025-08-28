import {
  View,
  TextInput,
  TextInputProps,
  TextStyle,
  StyleProp,
} from 'react-native';
import React from 'react';

import { StyleSheet } from 'react-native';
import { COLORS } from '../theme/styles/theme';

interface CustomInputProps extends TextInputProps {
  placeholder?: string;
  leftIcon?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  value: string;
  onChangeText: (text: string) => void;
}
const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  style,
  value,
  onChangeText,
  leftIcon,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.buttonContainer}>
        {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          value={value}
          onChangeText={onChangeText}
          {...props}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // height: verticalScale(60),
    justifyContent: 'center',

    backgroundColor: COLORS.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    // padding: horizontalScale(20),
    justifyContent: 'flex-start',
  },
  label: {
    color: COLORS.black,
    fontWeight: '400',
  },
  input: {
    fontWeight: '400',
    fontFamily: 'Poppins',
    fontSize: 20,
    color: COLORS.black,
    // height: verticalScale(58),
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: horizontalScale(10),
  },
});
export default CustomInput;

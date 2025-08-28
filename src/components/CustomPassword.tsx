import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../theme/styles/theme';

interface CustomPasswordProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  error?: string; // 👈 Error message support
}

const CustomPassword: React.FC<CustomPasswordProps> = ({
  value,
  onChangeText,
  placeholder = 'Enter your password',
  inputStyle,
  error,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor={COLORS.gray}
          value={value}
          secureTextEntry={!passwordVisible}
          onChangeText={onChangeText}
        />

        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon
            name={passwordVisible ? 'eye' : 'eye-off'}
            size={20}
            color={COLORS.gray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: 56,
    borderColor: COLORS.tabIcon,
    borderRadius: 100,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
    color: COLORS.dark,
    fontFamily: 'Poppins-Regular',
  },
  eyeIcon: {
    padding: 10,
  },
  
  errorText: {
    color: COLORS.red,
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
    fontFamily: 'Poppins-Regular',
  },
});

export default CustomPassword;

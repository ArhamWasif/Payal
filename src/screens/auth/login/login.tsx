import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { COLORS } from '../../../theme/styles/theme';
import CustomInput from '../../../components/CustomInput';
import CustomCheckbox from '../../../components/CustomCheckBox';
import { hp, wp } from '../../../theme/styles/dimensions';
import { useNavigation } from '@react-navigation/native';
import CustomPassword from '../../../components/CustomPassword';
const SignInScreen = () => {
  const [secureText, setSecureText] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Hi! Welcome back, you’ve been missed</Text>

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <CustomInput
        style={styles.input}
        placeholder="example@gmail.com"
        placeholderTextColor="#B0B0B0"
        keyboardType="email-address"
      />
      {/* <TextInput
        style={styles.input}
        placeholder="example@gmail.com"
        placeholderTextColor="#B0B0B0"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      /> */}

      {/* Password */}
      <Text style={styles.label}>Password</Text>
       <CustomPassword label="New Password" placeholder="********" />
      

      {/* Checkbox + Terms */}
      <View style={styles.checkboxWrapper}>
        <CustomCheckbox
          style={styles.checkbox}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <Text style={styles.checkboxText}>
          Agree with <Text style={styles.link}>Term of Service</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgetScr')}>
        <Text style={styles.forgot}>Forget Password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInBtn}
      onPress={() => navigation.navigate('TabNavigator')}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>
          Don’t Have an account?{' '}
          <Text
            style={styles.link}
            onPress={() => navigation?.navigate('SignUp')}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 5,
    lineHeight: 38,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.gray,
    textAlign: 'center',
    marginBottom: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 58,
    fontSize: 14,
    backgroundColor: '#FFF',
  },
  password: {
    fontSize: 16,
  },
  passwordWrapper: {
    borderColor: '#E6E6E6',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,

    borderRadius: 25,
    paddingHorizontal: 15,
    height: 58,
  },
  eyeIcon: {},
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
    borderRadius: 3,
    backgroundColor: '#000', // ✅ default checked
  },
  checkboxText: {
    fontFamily: 'Jost',
    fontSize: 12,
    // color: '#333',
    fontWeight: '400',
  },
  link: {
    color: '#000',
    fontWeight: '700',
  },
  forgot: {
    color: '#000',
    fontSize: 14,
    alignSelf: 'flex-end',
    marginBottom: 30,
    textDecorationLine: 'underline',
    lineHeight: 38,
  },
  signInBtn: {
    backgroundColor: '#000',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footerContainer: {
    position: 'absolute',

    bottom: hp(10),
    left: wp(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    textAlign: 'center',
    fontSize: 13,
    color: '#999',
  },
});

export default SignInScreen;

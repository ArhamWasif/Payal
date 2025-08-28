import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomCheckbox from '../../../components/CustomCheckBox';
import { COLORS } from '../../../theme/styles/theme';
import Button from '../../../components/Button';
import { hp, wp } from '../../../theme/styles/dimensions';
import Header from '../../../components/Header';
const LoginWithNumber = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header heading="Login With Number" />
      {/* Subtitle */}
      <View style={styles.innerContainer}>
        <Text style={styles.subtitle}>Number Verification</Text>
        <Text style={styles.description}>
          We need to register your phone number{'\n'}before getting start!
        </Text>

        {/* Phone Input */}
        <Text style={styles.NoTxt}>Number</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.prefix}>+92</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="304-8976543"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Checkbox */}
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setIsChecked(!isChecked)}
        >
          <CustomCheckbox isChecked={isChecked} setIsChecked={setIsChecked} />
          {/* <View style={[styles.checkbox, isChecked && styles.checked]}>
          {isChecked && <Text style={styles.tick}>✓</Text>}
        </View> */}
          <Text style={styles.checkboxText}>
            Agree with <Text style={styles.link}>Term of Service</Text> and{' '}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </TouchableOpacity>

        {/* Sign In Button */}
        <View style={styles.btn}>
          <Button
            title="Sign In"
            buttonStyle={styles.signInButton}
            textStyle={styles.signInText}
          />
        </View>
      </View>
      {/* <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity> */}

      {/* Footer */}
      <Text style={styles.footer}>
        Don’t Have an account? <Text style={styles.signUp}>Sign Up</Text>
      </Text>
    </SafeAreaView>
  );
};

export default LoginWithNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Jost',
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 38,
    marginBottom: 6,
  },
  description: {
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.gray,
    textAlign: 'center',
  },
  NoTxt: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 38,
    fontFamily: 'Jost',
    // marginBottom: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 38,
    fontWeight: '400',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.tabIcon,
    borderRadius: 30,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginBottom: 20,
    height: 56,
  },
  prefix: {
    fontSize: 16,
    fontWeight: '400',
    marginRight: 10,
    lineHeight: 38,
    color: COLORS.gray,
    fontFamily: 'Jost',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -20,
    
  },
  innerContainer: {
    marginTop: hp(4),
  },
btn: {
    marginTop: hp(10),
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checked: {
    backgroundColor: '#000',
  },
  tick: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkboxText: {
    fontFamily: 'Jost',
    fontSize: 12,
    color: COLORS.gray,
    fontWeight: '400',
  },
  link: {
    fontFamily: 'Jost',
    fontSize: 12,

    color: '#000',
    fontWeight: '600',
  },
  signInButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    // position: 'absolute',
    // bottom: 20,
    // textAlign: 'center',
    // fontSize: 14,
    // color: '#888',

    position: 'absolute',

    bottom: hp(10),
    left: wp(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUp: {
    color: '#000',
    fontWeight: '600',
  },
});

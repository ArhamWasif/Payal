import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

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
      <Header heading="Verfication" />
      {/* Subtitle */}
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.subtitle}>Enter a PIN Code</Text>
          <Text style={styles.description}>
            Please enter the 4-digits code we sent to email {'\n'}
            <Text style={styles.email}>example@gmail.com</Text>
          </Text>
        </View>
        <View>
          <OtpInput
            numberOfDigits={4}
            onTextChange={text => console.log(text)}
            autoFocus={false}
            hideStick={true}
            focusColor="#000"
            theme={{
              containerStyle: styles.otpContainer,
              pinCodeContainerStyle: styles.otpBox,
              pinCodeTextStyle: styles.otpText,
            }}
          />
          <Text style={styles.timer}>00:30</Text>
          <View>
            <TouchableOpacity>
              <Text style={styles.checkboxText}>
                Did you receive Code?
                <Text style={styles.link}> Resend Code</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Sign In Button */}
        <View style={styles.btn}>
          <Button
            title="Verify"
            buttonStyle={styles.signInButton}
            textStyle={styles.signInText}
          />
        </View>
      </View>
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
  email: {
    fontFamily: 'Jost',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 38,
    fontSize: 16,
    color: '#000',
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
    gap: 20,
  },
  btn: {
    marginTop: hp(7),
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
    textAlign: 'center',
    fontFamily: 'Jost',
    fontSize: 16,
    color: COLORS.gray,
    fontWeight: '400',
    marginTop: 20
  },
  link: {
    fontFamily: 'Jost',
    fontSize: 16,

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
  otpBox: {
    width: 72,
    height: 52,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  otpContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
  },
  timer: {
    fontSize: 16,
    color: COLORS.black,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Jost',
    fontWeight: '400',
  },
});

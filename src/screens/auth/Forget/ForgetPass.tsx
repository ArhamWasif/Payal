import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';

import { COLORS } from '../../../theme/styles/theme';
import Button from '../../../components/Button';
import { hp, wp } from '../../../theme/styles/dimensions';
import Header from '../../../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const LoginWithNumber = () => {
  const navigation = useNavigation();
  const [SelectMethod, setSelectMethod] = useState<'email' | 'phone'>('email');
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header heading="Forget Password" />
      {/* Subtitle */}
      <View style={styles.innerContainer}>
        <Text style={styles.subtitle}>Select Verification Method </Text>
        <Text style={styles.description}>
          Select verification method and we will send verification code
        </Text>
        <View style={styles.i} onPress={() => setSelectMethod('email')}>
          <View style={styles.i2}>
            <View style={styles.iconWrapper}>
              <Ionicons name="mail-outline" size={20} color="#000" />
            </View>

            <View>
              <Text style={styles.optionText}>•••••.com</Text>
            </View>
          </View>
          <View>
            <View
              style={[
                styles.radioOuter,
                SelectMethod === 'email' && styles.radioOuterActive,
              ]}
            >
              {SelectMethod === 'email' && <View style={styles.radioInner} />}
            </View>
          </View>
        </View>
        <View style={styles.i23}>
          <View style={styles.i} onPress={() => setSelectMethod('email')}>
            <View style={styles.i2}>
              <View style={styles.iconWrapper}>
                <Ionicons name="call-outline" size={20} color="#000" />
              </View>

              <View>
                <Text style={styles.optionText}>•••••7895</Text>
              </View>
            </View>
            <View>
              <View
                style={[
                  styles.radioOuter,
                  SelectMethod === 'phone' && styles.radioOuterActive,
                ]}
              >
                {SelectMethod === 'phone' && <View style={styles.radioInner} />}
              </View>
            </View>
          </View>
        </View>

        {/* Sign In Button */}
        <View style={styles.btn}>
          <Button
            title="Submit"
            buttonStyle={styles.signInButton}
            textStyle={styles.signInText}
          />
        </View>
      </View>

      {/* Footer */}
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.footer}>Back to Log In</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginWithNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    // gap: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  iconWrapper2: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  optionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 100,
    height: 58,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  radioOuterActive: {
    borderColor: '#000',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  i: {
    marginTop: hp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    padding: 15,
    borderRadius: 30,
  },
  i23: {
    marginTop: -hp(2),
  },
  i2: {
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconWrapper1: {
    flexDirection: 'row',
  },
  radioOuter: {
    width: 20,
    height: 20,
    // left: 120,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
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
  selectedBox: {
    borderColor: '#000',
  },
  description: {
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.gray,
    textAlign: 'center',
  },

  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 38,
    fontWeight: '400',
    color: '#000',
  },
  inputContainer: {
    marginTop: hp(4),
    gap: 15,
  },

  innerContainer: {
    marginTop: hp(4),
  },
  btn: {
    marginTop: hp(10),
  },

  footer: {
    textDecorationLine: 'underline',
    color: COLORS.gray,
    fontFamily: 'Jost',
    fontSize: 14,
    top: hp(30),
    left: wp(36),
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUp: {
    color: '#000',
    fontWeight: '600',
  },
});

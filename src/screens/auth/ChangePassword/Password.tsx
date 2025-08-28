import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { hp, wp } from '../../../theme/styles/dimensions';
import Header from '../../../components/Header';
import CustomPassword from '../../../components/CustomPassword';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../../components/CustomButton';
import { COLORS } from '../../../theme/styles/theme';

const Password = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header heading="Password Manager" />
      {/* Subtitle */}
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.label}>Current Password</Text>
          <CustomPassword label="New Password" placeholder="********" />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetScr')}>
          <Text style={styles.forgot}>Forget Password?</Text>
        </TouchableOpacity>
        <View style={styles.section}>
          <Text style={styles.label}>New Password</Text>
          <CustomPassword label="New Password" placeholder="********" />
        </View>
        <View style={styles.section1}>
          <Text style={styles.label}>Confirm New Password</Text>
          <CustomPassword label="New Password" placeholder="********" />
        </View>
        <View style={{ marginTop: hp(2) }}>
          <View>
            <Text style={styles.text}>Minimum 8 characters</Text>
          </View>
          <View>
            <Text style={styles.text}>Atleast 1 number (1-9)</Text>
          </View>
          <View>
            <Text style={styles.text}>
              Atleast lowercase or uppercase letters
            </Text>
          </View>
        </View>
        <CustomButton
          title="Change Password"
          buttonStyle={{
            backgroundColor: 'black',
            height: 56,
            marginTop: hp(14),
          }}
          textStyle={{ color: 'white' }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Password;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    gap: 10,
  },
  innerContainer: {
    marginTop: hp(2),
  },
  forgot: {
    color: '#000',
    fontSize: 14,
    alignSelf: 'flex-end',
    marginTop: hp(2),
    textDecorationLine: 'underline',
    lineHeight: 38,
    fontWeight: '600',
    fontFamily: 'Jost',
  },
  section: {
    marginTop: hp(5),
  },
  section1: {
    marginTop: hp(1.3),
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 8,

    lineHeight: 38,
    fontFamily: 'Jost',
  },
  text: {
    fontSize: 14,
    color: COLORS.gray,
    fontFamily: 'Jost',
    lineHeight: 22,
    fontWeight: '400',
    marginTop: hp(1),
  },
});

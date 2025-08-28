import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Bot from '../../../assets/images/lottie.svg';

import Header from '../../../components/Header';
import { COLORS } from '../../../theme/styles/theme';
import { hp, wp } from '../../../theme/styles/dimensions';

const PasswordChangedScreen = () => {
  return (
    <SafeAreaView style={styles.containerMain}>
      {/* Back Button */}
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.container}>
        <View>
          <Bot />
        </View>

        {/* Title */}
        <Text style={styles.title}>You’re All Set</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Password changed successfully, you can login again with a new password
        </Text>

        {/* Login Now Button */}

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login Now</Text>
          <Ionicons name="chevron-forward" size={18} color="#A3A3A3" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PasswordChangedScreen;

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    left: wp(5),
  },
  lottie: {
    width: 180,
    height: 180,
    marginTop: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000',
    marginTop: 30,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Jost',
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.gray,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 25,
    paddingHorizontal: 30,
  },
  loginButton: {
    fontFamily: 'Jost',
    fontSize: 20,

    right: -10,

    flexDirection: 'row',

    borderRadius: 30,
    marginTop: hp(20),
    alignItems: 'center',
  },
  loginText: {
    color: COLORS.gray,

    fontSize: 16,
    fontWeight: '600',
    marginRight: 5,
  },
});

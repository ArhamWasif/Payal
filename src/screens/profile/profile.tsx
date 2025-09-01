import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { THomeStack } from '../../navigation/types/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import ProfileIcon from '../../assets/images/Profile.svg';
import Arrow from '../../assets/images/arrow.svg';

import ProfileButton from '../../components/ProfileButton';
import { COLORS } from '../../theme/styles/theme';
import { hp, wp } from '../../theme/styles/dimensions';
const Profile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<THomeStack>>();

  return (
    <SafeAreaView style={styles.container}>
      <Header heading="Profile" />
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/female.png')}
            style={styles.icon2}
          />

          <Text style={styles.text}>Alia Khan</Text>
        </TouchableOpacity>

        <ProfileButton
          rightIcon={<Arrow />}
          leftIcon={<ProfileIcon />}
          title=" My Profile"
        />
        <View style={styles.line}>
          <Text style={styles.line1}></Text>
        </View>
        <ProfileButton
          rightIcon={<Arrow />}
          leftIcon={<ProfileIcon />}
          title=" Payment Methods"
        />
        <View style={styles.line}>
          <Text style={styles.line1}></Text>
        </View>
        <ProfileButton
          rightIcon={<Arrow />}
          leftIcon={<ProfileIcon />}
          title="My Orders"
        />
        <View style={styles.line}>
          <Text style={styles.line1}></Text>
        </View>
        <ProfileButton
          rightIcon={<Arrow />}
          leftIcon={<ProfileIcon />}
          title=" Notfication Settings"
        />
        <View style={styles.line}>
          <Text style={styles.line1}></Text>
        </View>
        <ProfileButton
          rightIcon={<Arrow />}
          leftIcon={<ProfileIcon />}
          title=" Password Manager"
        />
        <View style={styles.line}>
          <Text style={styles.line1}></Text>
        </View>
        <ProfileButton
          rightIcon={<Arrow />}
          leftIcon={<ProfileIcon />}
          title="Help Center"
        />
        <View style={styles.line}>
          <Text style={styles.line1}></Text>
        </View>
        <ProfileButton
          rightIcon={<Arrow />}
          leftIcon={<ProfileIcon />}
          title="Logout"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  line: {
    height: 1,

    borderWidth: 0.65,
    width: '92%',
    left: 15,
    borderColor: COLORS.borderline,
  },
  line1: {
    color: COLORS.gray,
  },
  text: {
    marginTop: 10,
    fontWeight: '600',
    fontFamily: 'Jost',
  },

  imageContainer: {
    alignItems: 'center',
    right: wp(2),
    justifyContent: 'center',
  },

  icon2: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  // icon1: {
  //   bottom: 10,

  //   width: wp(34),
  //   height: hp(34),
  // },
});

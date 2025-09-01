import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../theme/styles/theme';
import { hp, wp } from '../../theme/styles/dimensions';
const Special = () => {
      const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Header heading="Special Offers"   onPress={() => navigation.goBack()}/>
       <View style={{ marginTop: 10 }}>
              <Image
                source={require('../../assets/images/Frame.png')}
                style={styles.img}
              />
            </View>
                   <View style={{ marginTop: 10 }}>
              <Image
                source={require('../../assets/images/Frame.png')}
                style={styles.img}
              />
            </View>
                   <View style={{ marginTop: 10 }}>
              <Image
                source={require('../../assets/images/Frame.png')}
                style={styles.img}
              />
            </View>
                   <View style={{ marginTop: 10 }}>
              <Image
                source={require('../../assets/images/Frame.png')}
                style={styles.img}
              />
            </View>
    </SafeAreaView>
  );
};

export default Special;

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
   img: {
    width: '100%',
    height: 160,
    borderRadius:14
  },
});

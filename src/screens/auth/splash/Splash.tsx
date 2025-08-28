import { View, Image } from 'react-native';
import React, { useEffect } from 'react';
import Bot from '../../../assets/images/splash.png';

import styles from './styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Splash1');
    }, 2000);
  }, []);
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Image source={require('../../../assets/images/splashstart.png')} 
          style={styles.img}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default Splash;

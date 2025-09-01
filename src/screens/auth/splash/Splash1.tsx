import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import Bot from '../../../assets/images/Splash2.svg';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
const Splash1 = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/splash.png')}
          style={styles.img}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default Splash1;

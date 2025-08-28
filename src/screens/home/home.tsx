import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { THomeStack } from '../../navigation/types/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<THomeStack>>();

  return (
    <Pressable onPress={() => navigation.navigate('Notification')}>
      <Text style={{ marginTop: 20 }}>Home</Text>
    </Pressable>
  );
};

export default Home;

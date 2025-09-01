import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './mainstack';
import AuthStack from './authstack';

const Navigation = () => {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}

    </NavigationContainer>
  );
};

export default Navigation;

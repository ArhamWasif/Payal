import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/home/home';
import Notification from '../../screens/notification/notification';
import { THomeStack } from '../types/types';

const Stack = createNativeStackNavigator<THomeStack>();

const screens = [
  {
    key: 'Home',
    name: 'Home',
    component: Home,
  },
  {
    key: 'Notification',
    name: 'Notification',
    component: Notification,
  },
];
const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      {screens.map(s => (
        <Stack.Screen key={s.key} name={s.name} component={s?.component} />
      ))}
    </Stack.Navigator>
  );
};

export default MainStack;

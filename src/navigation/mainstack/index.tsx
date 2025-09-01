import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/home/home';
import Notification from '../../screens/notification/notification';
import { THomeStack } from '../types/types';
import Profile from '../../screens/profile/profile';
import TabNavigator from '../bottomTabBar';
import Sale from '../../screens/sale/sale';
import Wishlist from '../../screens/wishlist/wishlist';

const Stack = createNativeStackNavigator<THomeStack>();

const screens = [
  {
    key: 'TabNavigator',
    name: 'TabNavigator',
    component: TabNavigator,
  },
  {
    key: 'Home',
    name: 'Home',
    component: Home,
  },
  {
    key: 'Profile',
    name: 'Profile',
    component: Profile,
  },
  {
    key: 'Wishlist',
    name: 'Wishlist',
    component: Wishlist,
  },
  {
    key: 'Sale',
    name: 'Sale',
    component: Sale,
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
      screenOptions={{ headerShown: false }}
      initialRouteName="TabNavigator"
    >
      {screens.map(s => (
        <Stack.Screen key={s.key} name={s.name} component={s?.component} />
      ))}
    </Stack.Navigator>
  );
};

export default MainStack;

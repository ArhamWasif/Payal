import React, { useEffect, useState } from 'react';
import Home from '../screens/home/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/profile/profile';
import { Keyboard } from 'react-native';
import CustomBottomBar from '../components/CustomBottomBar/CustomBar';
import Sale from '../screens/sale/sale';
import Special from '../screens/ChildScreens/Special';
import Categories from '../screens/ChildScreens/Categories';
import Arrivals from '../screens/ChildScreens/Arrivals';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    // Add listeners for keyboard show and hide events
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // Hide the BottomTabBar when the keyboard shows
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // Show the BottomTabBar when the keyboard hides
      },
    );
    // Cleanup the listeners on unmount
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      tabBar={props => {
        return isKeyboardVisible ? null : <CustomBottomBar {...props} />;
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Wishlist" component={Home} />
      <Tab.Screen name="Sale" component={Sale} />
        <Tab.Screen name="Special" component={Special} />
               <Tab.Screen name="Categories" component={Categories} />
               <Tab.Screen name="Arrivals" component={Arrivals} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

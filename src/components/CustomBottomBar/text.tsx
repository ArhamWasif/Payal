import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Platform, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import assets from '../../assets/index';
import styles from './styles';

const json = [
  {
    name: 'Home',
    icon: assets.home,
    disable: false,
  },

  {
    name: 'Profile',
    icon: assets.profile,
    disable: false,
  },
];

const CustomBottomBar = ({state, navigation}: BottomTabBarProps) => {
  const inset = useSafeAreaInsets();

  const getActiveRouteName = () => {
    const route = state.routes[state.index];
    if (route.state && route.state.index !== undefined) {
      return route.state.routeNames[route.state.index];
    }
    return route.name;
  };

  const activeRouteName = getActiveRouteName();

  return (
    <View
      style={[
        styles.bottomBar,
        {
          marginBottom: Platform.OS === 'android' ? inset.bottom : 10,
        },
      ]}>
      {json.map(item => {
        const tabMap: Record<string, string> = {
          Home: 'Home',

          Profile: 'Profile',
        };

        const activeTabName = tabMap[activeRouteName];
        const isActive = activeTabName === item.name;
        return (
          <TouchableOpacity
            key={item.name}
            disabled={item?.disable}
            style={{padding: 10}}
            onPress={() => navigation.navigate(item.name)}>
            <Image
              source={item?.icon}
              style={[
                styles.Icon,
                {
                  tintColor: isActive ? '#6FC5A3B2' : 'white',
                },
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomBottomBar;

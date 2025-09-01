import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import assets from '../../assets';
import { Image, Platform, Pressable, Text, View } from 'react-native';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Wishlist from '../../screens/wishlist/wishlist';
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
  {
    name: 'Wishlist',
    icon: assets.wishlist,
    disable: false,
  },
  {
    name: 'Sale',
    icon: assets.sale,
    disable: false,
  },
];

const CustomBottomBar = ({ state, navigation }: BottomTabBarProps) => {
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
          marginBottom: inset.bottom,
        },
      ]}
    >
      {json.map(item => {
        const tabMap: Record<string, string> = {
          Home: 'Home',
          Profile: 'Profile',
          Wishlist: 'Wishlist',
          Sale: 'Sale',
        };
        const activeTabName = tabMap[activeRouteName];
        const isActive = activeTabName === item.name;
        return (
          <Pressable
            key={item.name}
            disabled={item?.disable}
            style={styles.tabButton}
            onPress={() => navigation.navigate(item.name)}
          >
            <View
              style={[
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                },
              ]}
            >
              <View>
                <Image
                  source={item?.icon}
                  style={[
                    styles.icon,
                    {
                      tintColor: isActive ? '#6FC5A3B2' : 'white',
                    },
                  ]}
                />
              </View>
              <View>
                <Text
                  style={{
                    color: isActive ? '#6FC5A3B2' : 'white',
                    fontSize: 12,
                    textAlign: 'center',

                    fontWeight: isActive ? '600' : '400',
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default CustomBottomBar;

import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../theme/styles/theme';
import { hp, wp } from '../../theme/styles/dimensions';
const Categories = () => {
  const navigation = useNavigation();
  const products1 = [
    {
      id: '1',
      title: 'Luxury Lawn',
      brand: 'Laam',

      image: '../../assets/images/Frame.png',
    },
    {
      id: '2',
      title: 'Vitamin C ',

      image: 'https://i.ibb.co/m4sTtyr/facewash.png',
    },
    {
      id: '3',
      title: 'M-Mad’s',

      image: 'https://i.ibb.co/xhGhM4c/shoes.png',
    },
    {
      id: '4',
      title: 'Design 44B ',

      image: 'https://i.ibb.co/LNQZ3MH/dress2.png',
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <Pressable style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/female.png')}
          style={styles.icon2}
        />
        <View style={styles.CatContainer}>
          <Text style={styles.tabText}>{item.title}</Text>
        </View>
      </Pressable>
    );
  };
    const renderItem2 = ({ item }) => {
    return (
      <Pressable style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/female.png')}
          style={styles.icon2}
        />
        <View style={styles.CatContainer}>
          <Text style={styles.tabText}>{item.title}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header heading="Categories" />
      <View style={{ marginTop: 10 }}>
        <FlatList
          keyExtractor={item => item.id}
          horizontal
          data={products1}
          renderItem={renderItem}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          keyExtractor={item => item.id}
          horizontal
          data={products1}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  imageContainer: {
    // paddingVertical: 10,
    paddingHorizontal: 2,
    gap: 10,
    marginRight: 10,
    marginTop: hp(1.6),
  },
  icon2: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  CatContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
});

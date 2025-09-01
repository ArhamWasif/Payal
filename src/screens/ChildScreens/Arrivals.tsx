import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../theme/styles/theme';
import { hp, wp } from '../../theme/styles/dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
const Arrivals = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('1');
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    const isActive = selectedCategory === item.id;
    return (
      <Pressable
        style={[styles.tabButton, isActive && styles.activeTab]}
        onPress={() => setSelectedCategory(item.id)}
      >
        <Text style={[styles.tabText, isActive && styles.activeText]}>
          {item.name}
        </Text>
      </Pressable>
    );
  };
  const categories = [
    { id: '1', name: 'Men' },
    { id: '2', name: 'Women' },
    { id: '3', name: 'Kids' },
    { id: '4', name: 'Accessories' },
  ];
  const products = [
    {
      id: '1',
      title: 'Luxury Lawn',
      brand: 'Laam',
      price: '28,500',
      rating: 4.5,
      image: '../../assets/images/Frame.png',
    },
    {
      id: '2',
      title: 'Vitamin C Face Wash',
      brand: '',
      price: '1,050',
      rating: 4.5,
      image: 'https://i.ibb.co/m4sTtyr/facewash.png',
    },
    {
      id: '3',
      title: 'M-Mad’s Footwear',
      brand: 'Laam',
      price: '6,500',
      rating: 4.5,
      image: 'https://i.ibb.co/xhGhM4c/shoes.png',
    },
    {
      id: '4',
      title: 'Design 44B Luxury Lawn',
      brand: 'Sobia Nazir',
      price: '14,500',
      rating: 4.5,
      image: 'https://i.ibb.co/LNQZ3MH/dress2.png',
    },
  ];
  const ProductCard = ({ item }: any) => (
    <View style={styles.card}>
      <Image
        source={require('../../assets/images/Frame.png')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.heartIcon}>
        <Ionicons name="heart" size={18} color="#A3A3A3" />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
      {item.brand ? <Text style={styles.brand}>{item.brand}</Text> : null}
      <Text style={styles.price}>PKR {item.price}</Text>
      <View style={styles.rating}>
        <Ionicons name="star" size={18} color="#A3A3A3" />
        <Text style={styles.ratingText}>{item.rating}/5</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header heading="Arrivals" />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="search-outline" size={20} color="#000" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#000"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="options-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* <Card> */}
      <ScrollView>
      <View style={styles.containerCard}>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => <ProductCard item={item} />}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Arrivals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    borderRadius: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#000',
  },
  filterButton: {
    marginLeft: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 50,
    backgroundColor: '#fff',
  },

  // Card Side
  containerCard: {
    // flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    marginTop: 8,
  },
  card: {
    borderWidth: 0.89,
    borderColor: COLORS.graylight,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    flex: 0.48,

    padding: 8,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 50,
    backgroundColor: '#fff',
    borderWidth: 1,

    borderColor: '#e5e5e5',
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  activeText: {
    color: '#fff',
  },

  image: {
    width: '100%',
    height: 213,
    borderRadius: 10,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
  },
  title: {
    fontFamily: 'Jost',
    fontWeight: '400',
    color: '#000',
    fontSize: 14,

    marginTop: 5,
  },
  brand: {
    fontSize: 12,
    color: 'gray',
    fontFamily: 'Jost',
    fontWeight: '400',
  },
  price: {
    fontFamily: 'Jost',
    fontWeight: '500',
    color: '#000',
    fontSize: 14,

    marginVertical: 3,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 3,
    fontSize: 12,
    color: 'black',
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

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  Pressable,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Carousel from "react-native-snap-carousel";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../theme/styles/theme';
const { width } = Dimensions.get('window');

const banners = [
  {
    id: '1',
    image: 'https://yourcdn.com/banner1.jpg', // Replace with your banner URLs
  },
  {
    id: '2',
    image: 'https://yourcdn.com/banner2.jpg',
  },
  {
    id: '3',
    image: 'https://yourcdn.com/banner3.jpg',
  },
];
// Dummy categories data
const categories = [
  { id: '1', name: 'Men' },
  { id: '2', name: 'Women' },
  { id: '3', name: 'Kids' },
  { id: '4', name: 'Accessories' },
];
const products = [
  {
    id: "1",
    title: "Luxury Lawn",
    brand: "Laam",
    price: "28,500",
    rating: 4.5,
    image: "../../assets/images/Frame.png",
  },
  {
    id: "2",
    title: "Vitamin C Face Wash",
    brand: "",
    price: "1,050",
    rating: 4.5,
    image: "https://i.ibb.co/m4sTtyr/facewash.png",
  },
  {
    id: "3",
    title: "M-Mad’s Footwear",
    brand: "Laam",
    price: "6,500",
    rating: 4.5,
    image: "https://i.ibb.co/xhGhM4c/shoes.png",
  },
  {
    id: "4",
    title: "Design 44B Luxury Lawn",
    brand: "Sobia Nazir",
    price: "14,500",
    rating: 4.5,
    image: "https://i.ibb.co/LNQZ3MH/dress2.png",
  },
];

const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('1');

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

  const ProductCard = ({ item }: any) => (
  
  <View style={styles.card}>
    <Image source={require('../../assets/images/Frame.png')} style={styles.image} />
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
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>PAYAL</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="bag-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="notifications-outline" size={24} color="#000" />
            <View style={styles.redDot} />
          </TouchableOpacity>
        </View>
      </View>

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

      {/* Special Offers Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Special Offers</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:10}}>
        <Image
          source={require('../../assets/images/Frame.png')}
          style={styles.img}
        />
      </View>

      <View style={styles.pagination}>
        {banners.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, activeIndex === i ? styles.activeDot : null]}
          />
        ))}
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>New Arrivals</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
<View style={{marginTop:10}}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      </View>
      <View style={styles.containerCard}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => <ProductCard item={item} />}
      />
    </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    letterSpacing: 10,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
  },
  redDot: {
    position: 'absolute',
    right: 2,
    top: 2,
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
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
  sectionHeader: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Jost',
    fontWeight: '400',
    color: '#000',
  },
  img: {
    width: '100%',
    height: 160,
  },
  viewAll: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: 14,
    color: '#A3A3A3',
  },
  bannerImage: {
    width: '100%',
    height: 160,
    borderRadius: 12,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
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
  tabText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  activeText: {
    color: '#fff',
  },




  // Card Side
   containerCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
    marginTop:8
  },
  card: {
    borderWidth:1,
    borderColor:COLORS.gray,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    flex: 0.48,
    elevation: 3,
    padding: 8,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
  },
  brand: {
    fontSize: 12,
    color: "gray",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 3,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 3,
    fontSize: 12,
    color: "gray",
  },
});

export default HomeScreen;

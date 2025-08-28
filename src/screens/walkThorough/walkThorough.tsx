import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { hp, wp } from '../../theme/styles/dimensions';
import CustomButton from '../../components/CustomButton';
import Arrow from '../../assets/images/Google.svg';
const WalkScreen = ({ navigation }: any) => {
  const slides = [
    {
      key: '1',
      title: 'Discover Payal’s Unique and \nExquisite Clothing \nCollections',
      image: require('../../assets/images/pic.png'),
    },
    {
      key: '2',
      title: 'Shop Your Perfect Look with Confidence and Style.',
      image: require('../../assets/images/pic.png'),
    },
    {
      key: '3',
      title: 'Flaunt Your Fashion and \nExpress Yourself with \nPayal.',
      image: require('../../assets/images/pic.png'),
    },
    {
      key: '4',
      // title: 'Flaunt Your Fashion and \nExpress Yourself with \nPayal.',
      image: require('../../assets/images/pic.png'),
    },
  ];
  const renderItem = ({ item }): any => (
    <View>
      <Image source={item.image} style={styles.img} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  const renderPagination = (activeIndex: number) => {
    if (activeIndex === slides.length - 1) {
      // 👉 Last Slide (4th)
      return (
        <View style={styles.lastSlideContainer}>
          <CustomButton leftIcon={<Arrow />} title="Sign Up with Google" />

          <CustomButton
            leftIcon={<Arrow />}
            title="Login With Number "
            buttonStyle={{ backgroundColor: 'black' }}
            textStyle={{ color: 'white' }}
          />

          <Pressable onPress={() => navigation.replace('Login')}>
            <Text style={styles.maybeLater}>Log in</Text>
          </Pressable>
        </View>
      );
    }

    // 👉 Other Slides (1–3)
    return (
      <View style={styles.paginationContainer}>
        {/* Dots */}
        <View style={styles.dotsWrapper}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === activeIndex && styles.activeDot]}
            />
          ))}
        </View>

        {/* Skip */}
        <Pressable onPress={() => navigation.replace('Login')}>
          <Text style={styles.skip}>Skip</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      renderPagination={renderPagination}
      showSkipButton={false}
      showNextButton={false}
      onDone={() => navigation.replace('Login')}
    />
  );
};
const styles = StyleSheet.create({
  img: {
    width: hp(45),
    height: wp(223),
  },
  skip: {
    fontFamily: 'Jost',
    fontSize: 18,
    color: 'white',
    fontWeight: 400,
    lineHeight: 25,
  },
  paginationContainer: {
    top: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 10,
  },
  dotsWrapper: { flexDirection: 'row' },
  dot: {
    backgroundColor: 'gray',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: 'white',
  },
  title: {
    position: 'absolute',
    fontFamily: 'Jost',
    fontSize: 25,
    color: 'white',
    fontWeight: 700,
    bottom: 70,
    lineHeight: 25,
    left: 20,
    right: 20,
  },

  lastSlideContainer: {
    position: 'absolute',
    bottom: 60,
    left: 20,
    right: 20,
    alignItems: 'center',
    gap: 10,
  },

  primaryBtn: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  secondaryBtn: {
    width: '100%',
    backgroundColor: '#444',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 20,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  maybeLater: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 25,
    fontFamily: 'Jost',
  },
});
export default WalkScreen;

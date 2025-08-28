import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../src/styles/components/header';

interface HeaderProps {
  heading: string;
  subheading?: string;
  style?: StyleProp<ViewStyle>;
}

const Header: React.FC<HeaderProps> = ({ heading, style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, style]}>
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>

        <Text style={styles.heading}>{heading}</Text>
      </View>
    </View>
  );
};

export default Header;

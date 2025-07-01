import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/homeScreen.styles';
import { HomeScreenProps } from '../types/homeScreen.types';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export default HomeScreen; 
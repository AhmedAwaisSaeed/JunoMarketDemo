import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/detailScreen.styles';
import { DetailScreenProps } from '../types/detailScreen.types';

const DetailScreen: React.FC<DetailScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail</Text>
    </View>
  );
};

export default DetailScreen; 
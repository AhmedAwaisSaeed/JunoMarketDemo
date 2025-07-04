import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../styles/common';
import { IS_IOS } from '../constants/platform';
import { AppImage } from './index';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  onPress?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price, onPress }) => (
  <View style={[styles.card, { overflow: IS_IOS ? 'visible' : 'hidden' }] }>
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={{ flex: 1 }}>
      <View style={styles.innerContent}>
        <AppImage source={{ uri: image }} resizeMode="contain" style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: 12,
    marginBottom: 16,
    // overflow set dynamically
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4, // Android
  },
  innerContent: {
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    width: 100,
    height: '100%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: colors.border,
  },
  cardContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
  },
});

export default ProductCard; 
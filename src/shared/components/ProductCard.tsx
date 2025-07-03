import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../styles/common';
import { IS_IOS } from '../constants/platform';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} resizeMode="contain" style={styles.image} />
    <View style={styles.cardContent}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: 12,
    marginBottom: 16,
    overflow: IS_IOS ? 'visible' : 'hidden',
    // Improved shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4, // Android
    flexDirection: 'row',
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
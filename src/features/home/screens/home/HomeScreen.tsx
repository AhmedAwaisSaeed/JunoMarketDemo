import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './homeScreen.styles';
import { HomeScreenProps } from './homeScreen.types';
import { fetchProducts } from '../../../../core/api/productsApi';
import ProductCard from '../../../../shared/components/ProductCard';
import CustomHeader from '../../../../shared/components/CustomHeader';
import Spinner from '../../../../shared/components/Spinner';

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data || []);
      } catch (e) {
        // handle error
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const renderItem = useCallback(({ item }: { item: Product }) => (
    <ProductCard image={item.thumbnail} title={item.title} description={item.description} price={item.price} />
  ), []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Spinner size="large" />
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <CustomHeader title="Products" showBack={false} />
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen; 
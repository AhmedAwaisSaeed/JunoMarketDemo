import React, { useCallback } from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './homeScreen.styles';
import { HomeScreenProps } from './homeScreen.types';
import ProductCard from '../../../../shared/components/ProductCard';
import CustomHeader from '../../../../shared/components/CustomHeader';
import Spinner from '../../../../shared/components/Spinner';
import { useProducts } from './useProducts';
import { commonStyles } from '../../../../shared/styles/common';

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {
    products,
    loading,
    refreshing,
    loadingMore,
    error,
    onRefresh,
    onEndReached,
  } = useProducts();

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <ProductCard
        image={item.thumbnail}
        title={item.title}
        description={item.description}
        price={item.price}
      />
    ),
    []
  );

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
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.2}
        ListFooterComponent={loadingMore ? <Spinner size="small" /> : null}
      />
      {error ? <Text style={commonStyles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default HomeScreen; 
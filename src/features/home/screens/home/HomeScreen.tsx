import React, { useCallback } from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './homeScreen.styles';
import { HomeStackScreenProps } from '../../../../navigation/HomeStackNavigator';
import ProductCard from '../../../../shared/components/ProductCard';
import CustomHeader from '../../../../shared/components/CustomHeader';
import Spinner from '../../../../shared/components/Spinner';
import { useProducts } from './useProducts';
import { commonStyles } from '../../../../shared/styles/common';
import { useNavigation } from '@react-navigation/native';

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
}

const HomeScreen: React.FC<HomeStackScreenProps<'Home'>> = () => {
  const navigation = useNavigation<HomeStackScreenProps<'Home'>['navigation']>();
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
    ({ item }: { item: Product }) => {
      const handlePress = () => {
        navigation.navigate('Detail', { id: item.id });
      };
      return (
        <ProductCard
          image={item.thumbnail}
          title={item.title}
          description={item.description}
          price={item.price}
          onPress={handlePress}
        />
      );
    },
    [navigation]
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
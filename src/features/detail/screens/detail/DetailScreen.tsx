import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './detailScreen.styles';
import { DetailScreenProps } from './detailScreen.types';
import { useAppDispatch, useAppSelector } from '../../../../core/store/hooks';
import { fetchProductDetailsThunk, resetProductDetails } from '../../../../core/store/slices/productDetailsSlice';
import Spinner from '../../../../shared/components/Spinner';
import CustomHeader from '../../../../shared/components/CustomHeader';
import { AppImage } from '../../../../shared/components';
import { commonStyles } from '../../../../shared/styles/common';

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const { id } = route.params;
  console.log('id', id);
  const dispatch = useAppDispatch();
  const { product, loading, error } = useAppSelector(state => state.productDetails);

  useEffect(() => {
    dispatch(fetchProductDetailsThunk(id));
    return () => {
      dispatch(resetProductDetails());
    };
  }, [dispatch, id]);

  if (loading) {
    return (
      <View style={commonStyles.centered}>
        <Spinner size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={commonStyles.centered}>
        <Text style={commonStyles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!product) {
    return null;
  }

  // Destructure with fallback values to avoid crashes
  const {
    title = '',
    brand = '',
    description = '',
    price = 0,
    category = '',
    thumbnail = '',
  } = product || {};

  return (
    <View style={styles.container}>
      <CustomHeader title={title || 'Product Detail'} showBack />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <AppImage source={{ uri: thumbnail }} style={styles.image} resizeMode="contain" />
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.brand}>{brand}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.category}>Category: {category}</Text>
        {/* Add more product details as needed */}
      </ScrollView>
    </View>
  );
};

export default DetailScreen; 
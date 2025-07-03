import { useCallback, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../core/store/hooks';
import { fetchProductsThunk} from '../../../../core/store/slices/productsSlice';

export function useProducts() {
  const dispatch = useAppDispatch();
  const { products, total, skip, limit, loading, refreshing, loadingMore, error } = useAppSelector(state => state.products);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    if (products.length === 0) {
      dispatch(fetchProductsThunk({ skip: 0, limit }));
    }
    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line
  }, []);

  const onRefresh = useCallback(() => {
    dispatch(fetchProductsThunk({ skip: 0, limit }));
  }, [dispatch, limit]);

  const onEndReached = useCallback(() => {
    if (!loadingMore && products.length < total) {
      dispatch(fetchProductsThunk({ skip: products.length, limit }));
    }
  }, [dispatch, loadingMore, products.length, total, limit]);

  return {
    products,
    total,
    skip,
    limit,
    loading,
    refreshing,
    loadingMore,
    error,
    onRefresh,
    onEndReached,
  };
} 
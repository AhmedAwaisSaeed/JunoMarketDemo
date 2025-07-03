import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../../core/api/productsApi';

export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
}

interface ProductsState {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  loading: boolean;
  refreshing: boolean;
  loadingMore: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  total: 0,
  skip: 0,
  limit: 30,
  loading: true,
  refreshing: false,
  loadingMore: false,
  error: null,
};

export const fetchProductsThunk = createAsyncThunk(
  'products/fetch',
  async ({ skip, limit }: { skip: number; limit: number }) => {
    return await fetchProducts(skip, limit);
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetProducts(state) {
      state.products = [];
      state.skip = 0;
      state.total = 0;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      // Handle the start of a fetch request
      .addCase(fetchProductsThunk.pending, (state, action) => {
        // If skip is 0 and no limit override, this is the initial load
        if (action.meta.arg.skip === 0 && !action.meta.arg.limit) {
          // Show the main spinner for the first load
          state.loading = true;
        // If skip is 0 but limit is set, this is a pull-to-refresh
        } else if (action.meta.arg.skip === 0) {
          // Show the pull-to-refresh spinner
          state.refreshing = true;
        } else {
          // Otherwise, this is a pagination (load more) request
          // Show the spinner at the end of the list
          state.loadingMore = true;
        }
        // Clear any previous error
        state.error = null;
      })
      // Handle a successful fetch
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        const { products, total, skip, limit } = action.payload;
        // If skip is 0, replace the product list (initial load or refresh)
        if (skip === 0) {
          state.products = products;
        } else {
          // Otherwise, append new products to the list (pagination)
          state.products = [...state.products, ...products];
        }
        // Update pagination and loading state
        state.total = total;
        state.skip = skip;
        state.limit = limit;
        state.loading = false;
        state.refreshing = false;
        state.loadingMore = false;
      })
      // Handle a failed fetch
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        // Stop all loaders and set the error message
        state.loading = false;
        state.refreshing = false;
        state.loadingMore = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export const { resetProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer; 
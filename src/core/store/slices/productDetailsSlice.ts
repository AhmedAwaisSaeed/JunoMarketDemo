import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductById } from '../../../core/api/productsApi';

export const fetchProductDetailsThunk = createAsyncThunk(
  'productDetails/fetch',
  async (id: number) => {
    return await fetchProductById(id);
  }
);

interface ProductDetailsState {
  product: any;
  loading: boolean;
  error: string | null;
}

const initialDetailsState: ProductDetailsState = {
  product: null,
  loading: false,
  error: null,
};

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: initialDetailsState,
  reducers: {
    resetProductDetails(state) {
      state.product = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProductDetailsThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetailsThunk.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProductDetailsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch product details';
      });
  },
});

export const { resetProductDetails } = productDetailsSlice.actions;
export const productDetailsReducer = productDetailsSlice.reducer; 
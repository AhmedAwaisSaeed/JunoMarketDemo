import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { productsReducer } from './slices/productsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    // home: homeReducer,
    // detail: detailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 
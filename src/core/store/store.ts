import { configureStore } from '@reduxjs/toolkit';

// Example: import authReducer from '../../features/auth/slice/authSlice';
// Add your reducers here

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // home: homeReducer,
    // detail: detailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 
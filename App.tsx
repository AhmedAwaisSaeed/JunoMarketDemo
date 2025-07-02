
import React, { useEffect, useState } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/core/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch, useAppSelector } from './src/core/store/hooks';
import { setIsLoggedIn } from './src/core/store/slices/authSlice';
import { ActivityIndicator, View } from 'react-native';

function AppWithPersistence() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hydrate auth state on mount
    const hydrateAuth = async () => {
      try {
        const value = await AsyncStorage.getItem('isLoggedIn');
        if (value !== null) {
          dispatch(setIsLoggedIn(value === 'true'));
        }
      } catch (e) {
        // handle error
      } finally {
        setLoading(false);
      }
    };
    hydrateAuth();
  }, [dispatch]);

  useEffect(() => {
    // Persist auth state on change
    AsyncStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
  }, [isLoggedIn]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <AppNavigator />;
}

export default function App() {
  return (
    <Provider store={store}>
      <AppWithPersistence />
    </Provider>
  );
}

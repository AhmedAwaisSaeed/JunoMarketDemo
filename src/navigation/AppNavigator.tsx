import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackNavigator } from './AuthStackNavigator';
import { HomeStackNavigator } from './HomeStackNavigator';
import { useAppSelector } from '../core/store/hooks';

export type RootStackParamList = {
  AuthStack: undefined;
  HomeStack: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <RootStack.Screen name="HomeStack" component={HomeStackNavigator} />
        ) : (
          <RootStack.Screen name="AuthStack" component={AuthStackNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>; 
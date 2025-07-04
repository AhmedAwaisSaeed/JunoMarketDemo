import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import HomeScreen from '../features/home/screens/home/HomeScreen';
import DetailScreen from '../features/detail/screens/detail/DetailScreen';

export type HomeStackParamList = {
  Home: undefined;
  Detail: { id: number };
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = NativeStackScreenProps<HomeStackParamList, T>; 
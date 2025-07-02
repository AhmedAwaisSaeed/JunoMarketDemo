import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import DetailScreen from '../features/detail/screens/detail/DetailScreen';

export type DetailStackParamList = {
  Detail: { itemId: string };
};

const DetailStack = createNativeStackNavigator<DetailStackParamList>();

export function DetailStackNavigator() {
  return (
    <DetailStack.Navigator screenOptions={{ headerShown: false }}>
      <DetailStack.Screen name="Detail" component={DetailScreen} />
    </DetailStack.Navigator>
  );
}

export type DetailStackScreenProps<T extends keyof DetailStackParamList> = NativeStackScreenProps<DetailStackParamList, T>; 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import LoginScreen from '../features/auth/screens/LoginScreen';
import HomeScreen from '../features/home/screens/HomeScreen';
import DetailScreen from '../features/detail/screens/DetailScreen';

// --- Auth Stack Types and Placeholder Screens ---
export type AuthStackParamList = {
  Login: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
}

// --- Home Stack Types and Placeholder Screens ---
export type HomeStackParamList = {
  Home: undefined;
  Detail: { itemId: string };
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      {/* Detail screen will be in DetailStack */}
    </HomeStack.Navigator>
  );
}

// --- Detail Stack Types and Placeholder Screens ---
export type DetailStackParamList = {
  Detail: { itemId: string };
};

const DetailStack = createNativeStackNavigator<DetailStackParamList>();

function DetailStackNavigator() {
  return (
    <DetailStack.Navigator screenOptions={{ headerShown: false }}>
      <DetailStack.Screen name="Detail" component={DetailScreen} />
    </DetailStack.Navigator>
  );
}

// --- Root Stack (Switch between Auth and Main App) ---
export type RootStackParamList = {
  AuthStack: undefined;
  HomeStack: undefined;
  DetailStack: { itemId: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  // TODO: Replace with real auth state
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
            <RootStack.Screen name="HomeStack" component={HomeStackNavigator} />
            <RootStack.Screen name="DetailStack" component={DetailStackNavigator} />
          </>
        ) : (
          <RootStack.Screen name="AuthStack" component={AuthStackNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

// --- Navigation Types for Props ---
export type AuthStackScreenProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, T>;
export type HomeStackScreenProps<T extends keyof HomeStackParamList> = NativeStackScreenProps<HomeStackParamList, T>;
export type DetailStackScreenProps<T extends keyof DetailStackParamList> = NativeStackScreenProps<DetailStackParamList, T>;
export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>; 
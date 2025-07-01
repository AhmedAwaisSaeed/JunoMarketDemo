import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/loginScreen.styles';
import { LoginScreenProps } from '../types/loginScreen.types';

const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
    </View>
  );
};

export default LoginScreen; 
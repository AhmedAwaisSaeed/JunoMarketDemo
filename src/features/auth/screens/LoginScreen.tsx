import React, { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { styles } from '../styles/loginScreen.styles';
import { LoginScreenProps } from '../types/loginScreen.types';
import CommonTextInput from '../../../shared/components/CommonTextInput';
import { commonStyles } from '../../../shared/styles/common';
import Button from '../../../shared/components/Button';

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Dummy login handler
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={[styles.container, commonStyles.screenHorizontalPadding]}>
          <Text style={styles.text}>Login</Text>
          <CommonTextInput
            label="Username"
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your username"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
          />
          <CommonTextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
            returnKeyType="done"
          />
          <View style={styles.buttonContainer}>
            <Button title="Login" onPress={handleLogin} fullWidth />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen; 
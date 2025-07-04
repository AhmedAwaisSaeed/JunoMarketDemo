import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './loginScreen.styles';
import { LoginScreenProps } from './loginScreen.types';
import CommonTextInput from '../../../../shared/components/CommonTextInput';
import { commonStyles } from '../../../../shared/styles/common';
import Button from '../../../../shared/components/Button';
import { DEMO_USERNAME, DEMO_PASSWORD } from '../../../../shared/constants/auth';
import { useAppDispatch } from '../../../../core/store/hooks';
import { login } from '../../../../core/store/slices/authSlice';

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    if (username !== DEMO_USERNAME || password !== DEMO_PASSWORD) {
      setError('Invalid username or password.');
      return;
    }
    setError('');
    dispatch(login());
  };

  return (
    <KeyboardAwareScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
      enableOnAndroid
      extraScrollHeight={24}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={commonStyles.screenHorizontalPadding}>
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
          {error ? <Text style={commonStyles.errorText}>{error}</Text> : null}
          <View style={styles.buttonContainer}>
            <Button title="Login" onPress={handleLogin} fullWidth />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen; 
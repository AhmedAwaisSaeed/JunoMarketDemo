import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View, Text } from 'react-native';

export interface CommonTextInputProps extends TextInputProps {
  label?: string;
}

const CommonTextInput: React.FC<CommonTextInputProps> = ({
  label,
  style,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor="#888"
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#222',
  },
});

export default CommonTextInput; 
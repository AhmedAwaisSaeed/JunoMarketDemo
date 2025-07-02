import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CommonTextInput from '../CommonTextInput';

describe('CommonTextInput', () => {
  it('renders with placeholder', () => {
    const { getByPlaceholderText } = render(
      <CommonTextInput placeholder="Enter text" />
    );
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('calls onChangeText when text changes', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <CommonTextInput placeholder="Type here" onChangeText={onChangeText} />
    );
    fireEvent.changeText(getByPlaceholderText('Type here'), 'hello');
    expect(onChangeText).toHaveBeenCalledWith('hello');
  });

  it('renders label if provided', () => {
    const { getByText } = render(
      <CommonTextInput label="Username" placeholder="Username" />
    );
    expect(getByText('Username')).toBeTruthy();
  });
}); 
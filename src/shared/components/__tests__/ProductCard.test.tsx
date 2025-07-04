import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductCard from '../ProductCard';

describe('ProductCard', () => {
  const mockProduct = {
    image: 'https://example.com/image.jpg',
    title: 'Test Product',
    description: 'A great product',
    price: 99.99,
    onPress: jest.fn(),
  };

  it('renders product details correctly', () => {
    const { getByText } = render(<ProductCard {...mockProduct} />);
    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('A great product')).toBeTruthy();
    expect(getByText('$99.99')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByText } = render(<ProductCard {...mockProduct} />);
    fireEvent.press(getByText('Test Product'));
    expect(mockProduct.onPress).toHaveBeenCalled();
  });
}); 
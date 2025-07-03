import axiosInstance from './axiosInstance';

export const fetchProducts = async (skip = 0, limit = 30) => {
  const response = await axiosInstance.get('/products', {
    params: { skip, limit },
  });
  return {
    products: response.data.products,
    total: response.data.total,
    skip: response.data.skip,
    limit: response.data.limit,
  };
}; 
import { defaultInstance } from '@/shared/api';

export const getProduct = async () => {
  // query: Record<string, string>
  // const queryString = new URLSearchParams( query ).toString();
  const response = await defaultInstance( 'products' );
  return await response.json();
};

export const getProducts = async () => {
  // query: Record<string, string>
  // const queryString = new URLSearchParams( query ).toString();
  const response = await defaultInstance( 'products' );
  return await response.json();
};
import { defaultInstance } from '@/shared/api';

export const getProduct = async ( id: string, query?: Record<string, string> ) => {
  const params = new URLSearchParams( query ).toString();
  const response = await defaultInstance( `products/${id}?${params}` );
  return await response.json();
};

export const getProducts = async ( query?: Record<string, string> ) => {
  const params = new URLSearchParams( query ).toString();
  const response = await defaultInstance( `products?${params}` );
  return await response.json();
};

export const getProductsByCategory = async ( category: string ) => {
  const response = await defaultInstance( `products?where[categories.slug][equals]=${category}` );
  return await response.json();
};
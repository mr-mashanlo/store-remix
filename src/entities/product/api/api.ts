import { defaultInstance } from '@/shared/api';

export const getProduct = async ( id: string, query?: Record<string, string> ) => {
  const params = new URLSearchParams( query );
  const response = await defaultInstance( `products/${id}?${params.toString()}` );
  return await response.json();
};

export const getProducts = async ( query?: Record<string, string> ) => {
  const params = new URLSearchParams( query );
  const response = await defaultInstance( `products?${params.toString()}` );
  return await response.json();
};

export const getProductsByCategory = async ( category: string, query?: Record<string, string> ) => {
  const params = new URLSearchParams( query );
  params.append( 'where[categories.slug][equals]', category );
  const response = await defaultInstance( `products?${params.toString()}` );
  return await response.json();
};
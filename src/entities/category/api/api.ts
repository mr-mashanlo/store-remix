import { defaultInstance } from '@/shared/api';

export const getCategory = async ( slug: string ) => {
  const response = await defaultInstance( `categories?where[slug][equals]=${slug}` );
  return await response.json();
};

export const getCategories = async () => {
  const response = await defaultInstance( 'categories' );
  return await response.json();
};
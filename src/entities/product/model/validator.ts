import { ProductSchema, ProductsSchema } from './schema';

export const validateProductData = ( data: unknown ) => {
  return ProductSchema.parse( data );
};

export const validateProductsData = ( data: unknown ) => {
  return ProductsSchema.parse( data );
};
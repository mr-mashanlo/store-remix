import { ProductSchema } from './schema';

export const validateProductData = ( data: unknown ) => {
  return ProductSchema.parse( data );
};
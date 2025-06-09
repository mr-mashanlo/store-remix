import { ProductSchema } from './schema';

export const validateProductData = ( data: unknown ) => {
  return ProductSchema.safeParse( data );
};
import z from 'zod';

import { Success } from '@/shared/schema';

import { Product } from './schema';

export const validateProductData = ( data: unknown ) => {
  return Product.parse( data );
};

export const validateProductsData = ( data: unknown ) => {
  return Success.extend( { docs: z.array( Product ) } ).parse( data );
};
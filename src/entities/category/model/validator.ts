import z from 'zod';

import { Success } from '@/shared/schema';

import { Category } from './schema';

export const validateCategoryData = ( data: unknown ) => {
  return Category.parse( data );
};

export const validateCategoriesData = ( data: unknown ) => {
  return Success.extend( { docs: z.array( Category ) } ).parse( data );
};
import { CategoriesSchema, CategorySchema } from './schema';

export const validateCategoryData = ( data: unknown ) => {
  return CategorySchema.parse( data );
};

export const validateCategoriesData = ( data: unknown ) => {
  return CategoriesSchema.parse( data );
};
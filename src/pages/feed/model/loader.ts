import { data, LoaderFunctionArgs } from '@remix-run/node';
import { ZodError } from 'zod';

import { getCategory, validateCategoriesData } from '@/entities/category';
import { getProductsByCategory, validateProductsData } from '@/entities/product';

const loader = async ( { params }: LoaderFunctionArgs ) => {
  try {
    const categoriesResponse = await getCategory( params.slug || '' );
    const categoriesResult = validateCategoriesData( categoriesResponse );
    const productsResponse = await getProductsByCategory( params.slug || '' );
    const productsResult = validateProductsData( productsResponse );
    return data( { categories: categoriesResult, products: productsResult } );
  } catch ( error ) {
    if ( error instanceof ZodError ) {
      throw data( { errors: { message: 'The provided data has an unexpected type.' } }, { status: 400 } );
    }
    throw data( { errors: { message: 'Something went wrong. Please try again later.' } }, { status: 500 } );
  }
};

export default loader;
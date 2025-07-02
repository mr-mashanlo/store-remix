import { data, LoaderFunctionArgs } from '@remix-run/node';
import { HTTPError } from 'ky';
import { ZodError } from 'zod';

import { getCategory, validateCategoriesData } from '@/entities/category';
import { getProductsByCategory, validateProductsData } from '@/entities/product';

const loader = async ( { params, request }: LoaderFunctionArgs ) => {
  try {
    const url = new URL( request.url );
    const search = url.searchParams.get( 'search' );
    const categoriesResponse = await getCategory( params.slug || '' );
    const categoriesResult = validateCategoriesData( categoriesResponse );
    const productsResponse = await getProductsByCategory( params.slug || '', { 'where[name][like]': search || '' } );
    const productsResult = validateProductsData( productsResponse );
    return data( { categories: categoriesResult, products: productsResult } );
  } catch ( error ) {
    if ( error instanceof ZodError ) {
      throw data( { errors: { message: 'The provided data has an unexpected type.' } }, { status: 400 } );
    }
    if ( error instanceof HTTPError ) {
      const response = await error.response.json();
      throw data( { errors: { message: response.errors[0].message } }, { status: 400 } );
    }
    throw data( { errors: { message: 'Something went wrong. Please try again later.' } }, { status: 500 } );
  }
};

export default loader;
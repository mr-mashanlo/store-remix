import { data, LoaderFunctionArgs } from '@remix-run/node';
import { HTTPError } from 'ky';
import { ZodError } from 'zod';

import { getProduct, validateProductData } from '@/entities/product';

const loader = async ( { params }: LoaderFunctionArgs ) => {
  try {
    const response = await getProduct( params.id || '' );
    const result = validateProductData( response );
    return data( result );
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
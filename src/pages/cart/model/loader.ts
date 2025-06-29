import { data, LoaderFunctionArgs } from '@remix-run/node';
import { ZodError } from 'zod';

import { CartsDTO, validateCartOptionsData } from '@/entities/cart';
import { cartCookie } from '@/entities/cart/api/cookie.server';
import { getOptions, validateOptionsData } from '@/entities/option';

const loader = async ( { request }: LoaderFunctionArgs ) => {
  try {
    const cookies = request.headers.get( 'Cookie' );
    const cookie = ( await cartCookie.parse( cookies ) ) || {};
    const cart: CartsDTO = cookie.cart || [];
    const response = await getOptions( { 'where[id][in]': cart.map( cart => cart.id ).join( ',' ) } );
    const result = validateOptionsData( response );
    const options = result.docs.map( option => ( { ...option, quantity: cart.find( cart => cart.id === option.id )?.quantity } ) );
    const resultCartOptions = validateCartOptionsData( { ...result, docs: options } );
    return data( resultCartOptions );
  } catch ( error ) {
    if ( error instanceof ZodError ) {
      throw data( { errors: { message: 'The provided data has an unexpected type.' } }, { status: 400 } );
    }
    throw data( { errors: { message: 'Something went wrong. Please try again later.' } }, { status: 500 } );
  }
};

export default loader;
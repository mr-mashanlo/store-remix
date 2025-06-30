import { data, LoaderFunctionArgs } from '@remix-run/node';
import { ZodError } from 'zod';

import { CartsDTO } from '@/entities/cart';
import { cartCookie } from '@/entities/cart/api/cookie.server';

const loader = async ( { request }: LoaderFunctionArgs ) => {
  try {
    const cookies = request.headers.get( 'Cookie' );
    const cookie = ( await cartCookie.parse( cookies ) ) || {};
    const cart: CartsDTO = cookie.cart || [];
    return data( { cart: cart.length } );
  } catch ( error ) {
    if ( error instanceof ZodError ) {
      throw data( { errors: { message: 'The provided data has an unexpected type.' } }, { status: 400 } );
    }
    throw data( { errors: { message: 'Something went wrong. Please try again later.' } }, { status: 500 } );
  }
};

export default loader;
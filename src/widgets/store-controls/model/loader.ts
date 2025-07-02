import { data, LoaderFunctionArgs } from '@remix-run/node';
import { HTTPError } from 'ky';
import { ZodError } from 'zod';

import { IQOrders } from '@/entities/cart';
import { cartCookie } from '@/entities/cart/api/cookie.server';

const loader = async ( { request }: LoaderFunctionArgs ) => {
  try {
    const cookies = request.headers.get( 'Cookie' );
    const cookie = ( await cartCookie.parse( cookies ) ) || {};
    const cart: IQOrders = cookie.cart || [];
    return data( { cart: cart.length } );
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
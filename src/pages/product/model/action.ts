import { ActionFunctionArgs, data } from '@remix-run/node';
import { HTTPError } from 'ky';
import { ZodError } from 'zod';

import { IQOrders } from '@/entities/cart';
import { cartCookie } from '@/entities/cart/api/cookie.server';

import { addToCart } from '../lib/add-to-cart';

const action = async ( { request }: ActionFunctionArgs ) => {
  try {
    const form = await request.formData();
    const option = form.get( 'option' );
    const cookies = request.headers.get( 'Cookie' );
    const cookie = ( await cartCookie.parse( cookies ) ) || {};
    const cart: IQOrders = cookie.cart || [];
    const updatedCookie = await cartCookie.serialize( { ...cookie, cart: addToCart( cart, String( option ) ) } );
    return data( {}, { headers: { 'Set-Cookie': updatedCookie } } );
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

export default action;
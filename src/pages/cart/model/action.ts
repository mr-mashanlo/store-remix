import { ActionFunctionArgs, data } from '@remix-run/node';
import { HTTPError } from 'ky';
import { ZodError } from 'zod';

import { cartCookie } from '@/entities/cart/api/cookie.server';

import { decreaseItem } from '../lib/decrease-item';
import { increaseItem } from '../lib/increase-item';

const action = async ( { request }: ActionFunctionArgs ) => {
  try {
    const form = await request.formData();
    const action = form.get( 'action' );
    const optionID = form.get( 'option' );

    const cookies = request.headers.get( 'Cookie' );
    const cookie = ( await cartCookie.parse( cookies ) ) || {};
    const cart = cookie.cart || [];

    let updatedCookie = '';

    if ( action === 'increment' ) {
      updatedCookie = await cartCookie.serialize( { ...cookie, cart: increaseItem( cart, String( optionID ) ) } );
    } else if ( action === 'decrement' ) {
      updatedCookie = await cartCookie.serialize( { ...cookie, cart: decreaseItem( cart, String( optionID ) ) } );
    }

    return data( {}, { headers: { 'Set-Cookie': updatedCookie } } );
  } catch ( error ) {
    if ( error instanceof ZodError ) {
      throw data( { errors: { ...error.flatten().fieldErrors } }, { status: 400 } );
    }
    if ( error instanceof HTTPError ) {
      const response = await error.response.json();
      throw data( { errors: { email: null, password: null, message: response.errors[0].message } }, { status: 400 } );
    }
    throw data( { errors: { email: null, password: null, message: 'Something went wrong. Please try again later.' } }, { status: 500 } );
  }
};

export default action;
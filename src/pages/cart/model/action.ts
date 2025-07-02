import { ActionFunctionArgs, data, redirect } from '@remix-run/node';
import { HTTPError } from 'ky';
import { ZodError } from 'zod';

import { handleCheckoutAction } from '../lib/handle-checkout-action';
import { handleQuantityAction } from '../lib/handle-quantity-action';

const action = async ( { request }: ActionFunctionArgs ) => {
  try {
    const form = await request.formData();
    const action = form.get( 'action' );

    if ( action === 'increment' || action === 'decrement' ) {
      const cookie = await handleQuantityAction( request, form );
      return data( {}, { headers: { 'Set-Cookie': cookie || '' } } );
    }

    if ( action === 'checkout' ) {
      const { order, updatedCookie } = await handleCheckoutAction( request, form );
      return redirect( `/order/${order.doc.id}`, { headers: { 'Set-Cookie': updatedCookie || '' } } );
    }
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
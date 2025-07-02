import { data, LoaderFunctionArgs } from '@remix-run/node';
import { HTTPError } from 'ky';
import { ZodError } from 'zod';

import { IQOrders, validateOrdersData } from '@/entities/cart';
import { cartCookie } from '@/entities/cart/api/cookie.server';
import { getOptions, validateOptionsData } from '@/entities/option';

const loader = async ( { request }: LoaderFunctionArgs ) => {
  try {
    const cookies = request.headers.get( 'Cookie' );
    const cookie = ( await cartCookie.parse( cookies ) ) || {};
    const cart: IQOrders = cookie.cart || [];

    const response = await getOptions( { 'where[id][in]': cart.map( order => order.option ).join( ',' ) } );
    const result = validateOptionsData( response );

    const options = result.docs.map( option => ( { option, quantity: cart.find( order => order.option === option.id )?.quantity } ) );
    const resultOrders = validateOrdersData( { ...result, docs: options } );

    return data( resultOrders );
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
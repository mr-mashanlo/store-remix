import { cartCookie } from '@/entities/cart/api/cookie.server';

import { decreaseItem } from './decrease-item';
import { increaseItem } from './increase-item';

export const handleQuantityAction = async ( request: Request, form: FormData ) => {
  const action = form.get( 'action' );
  const optionID = form.get( 'option' );
  const cookies = request.headers.get( 'Cookie' );
  const cookie = ( await cartCookie.parse( cookies ) ) || {};
  const cart = cookie.cart || [];

  if ( action === 'increment' ) {
    return await cartCookie.serialize( { ...cookie, cart: increaseItem( cart, String( optionID ) ) } );
  }

  if ( action === 'decrement' ) {
    return await cartCookie.serialize( { ...cookie, cart: decreaseItem( cart, String( optionID ) ) } );
  }
};
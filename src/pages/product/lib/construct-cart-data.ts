import { OptionsType } from '@/entities/cart';

export const constructCartData = ( cart: OptionsType, optionID: string ) => {
  const option = cart.find( option => option.id === optionID );
  const options = cart.filter( option => option.id !== optionID );
  if ( option ) return [ ...options, { id: option.id, quantity: option.quantity + 1 } ];
  return [ ...cart, { id: optionID, quantity: 1 } ];
};
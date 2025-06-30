import { CartsDTO } from '@/entities/cart';

export const decreaseItem = ( cart: CartsDTO, optionID: string ) => {
  const quantity = cart.find( option => option.id === optionID )?.quantity || 0;
  if ( quantity > 1 ) {
    return [ ...cart ].map( option => option.id === optionID ? { ...option, quantity: option.quantity - 1 } : option );
  } else {
    return [ ...cart ].filter( option => option.id !== optionID );
  }
};
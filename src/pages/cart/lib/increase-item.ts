import { CartsDTO } from '@/entities/cart';

export const increaseItem = ( cart: CartsDTO, optionID: string ) => {
  return [ ...cart ].map( option => option.id === optionID ? { ...option, quantity: option.quantity + 1 } : option );
};
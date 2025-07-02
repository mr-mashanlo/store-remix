import { IQOrders } from '@/entities/cart';

export const addToCart = ( orders: IQOrders, id: string ) => {
  const option = orders.find( order => order.option === id );
  const options = orders.filter( order => order.option !== id );
  if ( option ) return [ ...options, { ...option, quantity: option.quantity + 1 } ];
  return [ ...orders, { option: id, quantity: 1 } ];
};
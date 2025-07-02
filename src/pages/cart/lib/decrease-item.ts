import { IQOrders } from '@/entities/cart';

export const decreaseItem = ( orders: IQOrders, id: string ) => {
  const quantity = orders.find( order => order.option === id )?.quantity || 0;
  if ( quantity > 1 ) {
    return [ ...orders ].map( order => order.option === id ? { ...order, quantity: order.quantity - 1 } : order );
  } else {
    return [ ...orders ].filter( order => order.option !== id );
  }
};
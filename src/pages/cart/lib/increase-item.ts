import { IQOrders } from '@/entities/cart';

export const increaseItem = ( orders: IQOrders, id: string ) => {
  return [ ...orders ].map( order => order.option === id ? { ...order, quantity: order.quantity + 1 } : order );
};
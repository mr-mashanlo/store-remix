import { OrderSchema, OrdersSchema } from './schema';

export const validateOrderData = ( data: unknown ) => {
  return OrderSchema.parse( data );
};

export const validateOrdersData = ( data: unknown ) => {
  return OrdersSchema.parse( data );
};
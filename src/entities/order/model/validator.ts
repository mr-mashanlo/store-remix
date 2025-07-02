import z from 'zod';

import { Success } from '@/shared/schema';

import { Order } from './schema';

export const validateCreatedOrderData = ( data: unknown ) => {
  return z.object( { doc: Order, message: z.string() } ).parse( data );
};

export const validateOrderData = ( data: unknown ) => {
  return Order.parse( data );
};

export const validateOrdersData = ( data: unknown ) => {
  return Success.extend( { docs: z.array( Order ) } ).parse( data );
};
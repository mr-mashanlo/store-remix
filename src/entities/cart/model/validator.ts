import z from 'zod';

import { Success } from '@/shared/schema';

import { Order } from './schema';

export const validateOrdersData = ( data: unknown ) => {
  return Success.extend( { docs: z.array( Order ) } ).parse( data );
};;
import z from 'zod';

import { Success } from '@/shared/schema';

import { Option } from './schema';

export const validateOptionsData = ( data: unknown ) => {
  return Success.extend( { docs: z.array( Option ) } ).parse( data );
};
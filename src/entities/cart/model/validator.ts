import { CartOptionsSchema } from './schema';

export const validateCartOptionsData = ( data: unknown ) => {
  return CartOptionsSchema.parse( data );
};
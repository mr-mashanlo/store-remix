import { OptionsSchema } from './schema';

export const validateOptionsData = ( data: unknown ) => {
  return OptionsSchema.parse( data );
};
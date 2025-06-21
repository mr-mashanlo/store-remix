import { AuthSchema } from './schema';

export const validateAuthData = ( data: unknown ) => {
  return AuthSchema.safeParse( data );
};
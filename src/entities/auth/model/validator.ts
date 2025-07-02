import { Auth } from './schema';

export const validateAuthData = ( data: unknown ) => {
  return Auth.safeParse( data );
};
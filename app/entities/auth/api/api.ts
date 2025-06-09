import { defaultInstance } from '@/shared/api';

export const signIn = async ( request: Request, { email, password }: { email: string, password: string } ) => {
  const response = await defaultInstance( 'users/login', { method: 'post', body: JSON.stringify( { email, password } ), headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  return response;
};

export const signUp = async ( { email, password }: { email: string, password: string } ) => {
  const response = await defaultInstance( 'users', { method: 'post', body: JSON.stringify( { email, password } ) } );
  return await response.json();
};

export const signOut = async () => {
  const response = await defaultInstance( 'users/logout', { method: 'post' } );
  return await response.json();
};

export const refresh = async () => {
  const response = await defaultInstance( 'users/refresh-token', { method: 'post' } );
  return await response.json();
};
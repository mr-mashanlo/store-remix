import { defaultInstance } from '@/shared/api';

export const signIn = async ( request: Request, { email, password }: { email: string, password: string } ) => {
  const response = await defaultInstance( 'users/login', { method: 'post', body: JSON.stringify( { email, password } ), headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  return response;
};

export const signUp = async ( request: Request, { email, password }: { email: string, password: string } ) => {
  await defaultInstance( 'users', { method: 'post', body: JSON.stringify( { email, password } ) } );
  const response = await defaultInstance( 'users/login', { method: 'post', body: JSON.stringify( { email, password } ), headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  return response;
};

export const signOut = async ( request: Request ) => {
  const response = await defaultInstance( 'users/logout', { method: 'post', headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  return await response.json();
};

export const refresh = async ( request: Request ) => {
  const response = await defaultInstance( 'users/refresh-token', { method: 'post', headers: { cookie: request.headers.get( 'cookie' ) ?? '' } } );
  return await response.json();
};
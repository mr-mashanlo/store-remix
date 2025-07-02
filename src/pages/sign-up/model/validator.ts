import z from 'zod';

export const QAuth = z.object( {
  email: z.string(),
  password: z.string().min( 8, { message: 'Password must contain at least 8 characters' } )
} );

export const validateQAuthData = ( data: unknown ) => {
  return QAuth.parse( data );
};

import z from 'zod';

export const Error = z.object( {
  errors: z.array( z.object( {
    message: z.string()
  } ) )
} );

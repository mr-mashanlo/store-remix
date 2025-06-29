import z from 'zod';

export const ErrorDTO = z.object( {
  errors: z.array( z.object( {
    message: z.string()
  } ) )
} );

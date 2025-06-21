import z from 'zod';

const ErrorDTO = z.object( {
  errors: z.array( z.object( {
    message: z.string()
  } ) )
} );

export default ErrorDTO;
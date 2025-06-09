import { z } from 'zod';

export const AuthFormSchema = z.object( {
  email: z.string(),
  password: z.string().min( 8, { message: 'Password must contain at least 8 characters' } )
} );
import { z } from 'zod';

export const Auth = z.object( {
  exp: z.number(),
  token: z.string(),
  user: z.object( {
    id: z.string(),
    email: z.string()
  } )
} );
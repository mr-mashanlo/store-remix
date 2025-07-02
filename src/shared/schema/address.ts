import z from 'zod';

export const Address = z.object( {
  region: z.string(),
  city: z.string(),
  street: z.string()
} );
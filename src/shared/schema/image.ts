import z from 'zod';

export const Image = z.object( {
  id: z.string(),
  url: z.string(),
  alt: z.string()
} );
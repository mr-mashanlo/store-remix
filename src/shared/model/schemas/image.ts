import z from 'zod';

export const ImageSchema = z.object( {
  id: z.string(),
  url: z.string(),
  alt: z.string()
} );
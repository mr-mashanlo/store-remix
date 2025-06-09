import { z } from 'zod';

export const ImageSchema = z.object( {
  url: z.string(),
  alt: z.string()
} );
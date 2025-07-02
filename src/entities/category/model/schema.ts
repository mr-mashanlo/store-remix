import { z } from 'zod';

export const Category = z.object( {
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string()
} );
import { z } from 'zod';

import { Image } from '@/shared/schema';

export const Option = z.object( {
  id: z.string(),
  name: z.string(),
  price: z.number(),
  discount: z.number().nullable().optional(),
  image: Image
} );
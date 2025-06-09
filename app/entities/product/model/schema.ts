import { z } from 'zod';

import { ImageSchema, SuccessSchema } from '@/shared/model';

export const ProductSchema = SuccessSchema.extend( {
  docs: z.array( z.object( {
    id: z.string(),
    name: z.string(),
    images: z.array( ImageSchema )
  } ) )
} );
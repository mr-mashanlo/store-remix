import { z } from 'zod';

import { ImageSchema, SuccessDTO } from '@/shared/model/schemas';

export const OptionSchema = z.object( {
  id: z.string(),
  name: z.string(),
  price: z.number(),
  discount: z.number().nullable().optional(),
  image: ImageSchema
} );

export const OptionsSchema = SuccessDTO.extend( {
  docs: z.array( OptionSchema )
} );
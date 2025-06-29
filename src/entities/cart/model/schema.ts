import z from 'zod';

import { OptionSchema } from '@/entities/option';
import { SuccessDTO } from '@/shared/model/schemas';

export const CartDTO = z.object( {
  id: z.string(),
  quantity: z.number()
} );

export const CartsDTO = z.array( CartDTO );

export const CartOptionSchema = OptionSchema.extend( {
  quantity: z.number()
} );

export const CartOptionsSchema = SuccessDTO.extend( {
  docs: z.array( CartOptionSchema )
} );
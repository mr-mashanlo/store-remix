import { z } from 'zod';

import { SuccessDTO } from '@/shared/model';

export const ProductSchema = SuccessDTO.extend( {
  docs: z.array(
    z.object( {
      id: z.string(),
      name: z.string()
    } )
  )
} );
import { z } from 'zod';

import { SuccessDTO } from '@/shared/model/schemas';

export const CategorySchema = z.object( {
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string()
} );

export const CategoriesSchema = SuccessDTO.extend( {
  docs: z.array( CategorySchema )
} );
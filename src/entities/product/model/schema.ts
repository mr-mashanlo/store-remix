import { z } from 'zod';

import { CategorySchema } from '@/entities/category';
import { OptionSchema } from '@/entities/option';
import { ImageSchema, SuccessDTO } from '@/shared/model/schemas';

export const ProductSchema = z.object( {
  id: z.string(),
  name: z.string(),
  excerpt: z.string(),
  description: z.string(),
  categories: z.array( CategorySchema ),
  images: z.array( ImageSchema ),
  options: z.array( OptionSchema )
} );

export const ProductsSchema = SuccessDTO.extend( {
  docs: z.array( ProductSchema )
} );
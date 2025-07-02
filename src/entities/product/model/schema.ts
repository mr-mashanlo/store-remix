import { z } from 'zod';

import { Category } from '@/entities/category';
import { Option } from '@/entities/option';
import { Image } from '@/shared/schema';

export const Product = z.object( {
  id: z.string(),
  name: z.string(),
  excerpt: z.string(),
  description: z.string(),
  categories: z.array( Category ),
  images: z.array( Image ),
  options: z.array( Option )
} );
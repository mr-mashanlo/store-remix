import { z } from 'zod';

import { SuccessDTO } from '@/shared/model';

const Category = z.object( {
  id: z.string(),
  name: z.string(),
  slug: z.string()
} );

const Image = z.object( {
  id: z.string(),
  url: z.string(),
  alt: z.string()
} );

const Variant = z.object( {
  id: z.string(),
  name: z.string(),
  price: z.number(),
  discount: z.number().nullable().optional(),
  image: Image
} );

export const ProductSchema = z.object( {
  id: z.string(),
  name: z.string(),
  excerpt: z.string(),
  description: z.string(),
  categories: z.array( Category ),
  images: z.array( Image ),
  variants: z.array( Variant )
} );

export const ProductsSchema = SuccessDTO.extend( {
  docs: z.array( ProductSchema )
} );
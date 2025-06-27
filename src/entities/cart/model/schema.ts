import z from 'zod';

export const VariantSchema = z.object( {
  id: z.string(),
  quantity: z.number()
} );

export const VariantsSchema = z.array( VariantSchema );
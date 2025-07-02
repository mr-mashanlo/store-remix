import z from 'zod';

export const Order = z.object( {
  option: z.string(),
  quantity: z.number(),
  price: z.number().optional()
} );
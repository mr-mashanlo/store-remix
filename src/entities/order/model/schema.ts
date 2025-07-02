import z from 'zod';

import { Option } from '@/entities/option';
import { Address, Order as OrderBase } from '@/shared/schema';

const Base = z.object( {
  id: z.string().optional(),
  user: z.string().optional(),
  status: z.string(),
  address: Address
} );

export const QOrder = Base.extend( {
  options: z.array( OrderBase.extend( { price: z.number() } ) )
} );

export const Order = Base.extend( {
  options: z.array( OrderBase.extend( { price: z.number(), option: Option } ) )
} );

export const COrder = z.object( {
  doc: Order,
  message: z.string()
} );
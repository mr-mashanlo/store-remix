import z from 'zod';

import { OptionSchema } from '@/entities/option';
import { SuccessDTO } from '@/shared/model/schemas';

const BaseOption = z.object( {
  quantity: z.number(),
  price: z.number()
} );

const BaseDTO = z.object( {
  user: z.string().optional(),
  status: z.string(),
  address: z.object( {
    country: z.string(),
    region: z.string(),
    city: z.string(),
    street: z.string()
  } )
} );

export const OrderDTO = BaseDTO.extend( {
  products: z.array(
    BaseOption.extend( {
      option: z.string()
    } )
  )
} );

export const OrderSchema = BaseDTO.extend( {
  products: z.array(
    BaseOption.extend( {
      option: OptionSchema
    } )
  )
} );

export const OrdersSchema = SuccessDTO.extend( {
  docs: z.array( OrderSchema )
} );
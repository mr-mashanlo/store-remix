import z from 'zod';

import { Option } from '@/entities/option';
import { Order as OrderBase } from '@/shared/schema';

export const QOrders = z.array( OrderBase );

export const Order = OrderBase.extend( { option: Option } );
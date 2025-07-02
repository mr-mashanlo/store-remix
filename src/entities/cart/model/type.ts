import z from 'zod';

import { QOrders } from './schema';

export type IQOrders = z.infer<typeof QOrders>;
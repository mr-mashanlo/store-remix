import { z } from 'zod';

import { COrder, QOrder } from './schema';

export type IQOrder = z.infer<typeof QOrder>

export type ICOrder = z.infer<typeof COrder>
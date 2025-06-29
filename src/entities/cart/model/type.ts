import z from 'zod';

import { CartsDTO } from './schema';

export type CartsDTO = z.infer<typeof CartsDTO>;
import z from 'zod';

import { Product } from './schema';

export type IProduct = z.infer<typeof Product>;
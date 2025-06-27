import z from 'zod';

import { VariantsSchema } from './schema';

export type VariantsType = z.infer<typeof VariantsSchema>;
import z from 'zod';

import { OptionsSchema } from './schema';

export type OptionsType = z.infer<typeof OptionsSchema>;
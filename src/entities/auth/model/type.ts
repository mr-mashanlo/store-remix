import { z } from 'zod';

import { AuthSchema } from './schema';

export type AuthType = z.infer<typeof AuthSchema>;
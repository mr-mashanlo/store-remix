import { z } from 'zod';

export const SuccessSchema = z.object( {
  totalDocs: z.number(),
  limit: z.number(),
  totalPages: z.number(),
  page: z.number(),
  pagingCounter: z.number(),
  hasPrevPage: z.boolean(),
  hasNextPage: z.boolean(),
  prevPage: z.number().nullable(),
  nextPage: z.number().nullable()
} );

export const ErrorShema = z.object( {
  errors: z.array( z.object( {
    message: z.string()
  } ) )
} );
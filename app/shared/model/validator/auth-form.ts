import { AuthFormSchema } from '../schema/auth';

export const validateAuthFormData = ( data: unknown ) => {
  return AuthFormSchema.parse( data );
};
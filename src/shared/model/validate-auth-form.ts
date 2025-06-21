import z from 'zod';

export const FormSchema = z.object( {
  email: z.string(),
  password: z.string().min( 8, { message: 'Password must contain at least 8 characters' } )
} );

const validateAuthFormData = ( data: unknown ) => {
  return FormSchema.parse( data );
};

export default validateAuthFormData;
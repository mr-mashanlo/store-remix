import { ActionFunctionArgs, data } from '@remix-run/node';
import { HTTPError } from 'ky';
import { ZodError } from 'zod';

const action = async ( { request }: ActionFunctionArgs ) => {
  try {
    const form = await request.formData();
    return data( { variant: form.get( 'variant' ) } );
  } catch ( error ) {
    if ( error instanceof ZodError ) {
      throw data( { errors: { ...error.flatten().fieldErrors } }, { status: 400 } );
    }
    if ( error instanceof HTTPError ) {
      const response = await error.response.json();
      throw data( { errors: { email: null, password: null, message: response.errors[0].message } }, { status: 400 } );
    }
    throw data( { errors: { email: null, password: null, message: 'Something went wrong. Please try again later.' } }, { status: 500 } );
  }
};

export default action;
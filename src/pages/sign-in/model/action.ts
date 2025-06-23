import { ActionFunctionArgs, data, redirect } from '@remix-run/node';
import { HTTPError } from 'ky';
import { ZodError } from 'zod';

import { signIn } from '@/entities/auth';
import { validateAuthFormData } from '@/shared/model';

const action = async ( { request }: ActionFunctionArgs ) => {
  try {
    const form = await request.formData();
    const body = validateAuthFormData( { email: form.get( 'email' ), password: form.get( 'password' ) } );
    const response = await signIn( request, body );
    return redirect( '/', { headers: { 'Set-Cookie': response.headers.get( 'set-cookie' ) || '' } } );
  } catch ( error ) {
    if ( error instanceof ZodError ) {
      return data( { errors: { ...error.flatten().fieldErrors } }, { status: 400 } );
    }
    if ( error instanceof HTTPError ) {
      const response = await error.response.json();
      return data( { errors: { email: null, password: null, message: response.errors[0].message } }, { status: 400 } );
    }
    return data( { errors: { email: null, password: null, message: 'Something went wrong. Please try again later.' } }, { status: 500 } );
  }
};

export default action;
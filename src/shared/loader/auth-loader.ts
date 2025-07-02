import { data, LoaderFunctionArgs, redirect } from '@remix-run/node';
import { HTTPError } from 'ky';

const checkAuthLoader = async ( { request }: LoaderFunctionArgs ) => {
  try {
    const cookies = request.headers.get( 'Cookie' );
    if ( /payload-token/.test( cookies || '' ) ) return redirect( '/' );
  } catch ( error ) {
    if ( error instanceof HTTPError ) {
      const response = await error.response.json();
      throw data( { errors: { message: response.errors[0].message } }, { status: 400 } );
    }
    throw data( { errors: { message: 'Something went wrong. Please try again later.' } }, { status: 500 } );
  }
};

export default checkAuthLoader;
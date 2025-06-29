import { data, LoaderFunctionArgs, redirect } from '@remix-run/node';

const checkAuthLoader = async ( { request }: LoaderFunctionArgs ) => {
  try {
    const cookies = request.headers.get( 'Cookie' );
    if ( /payload-token/.test( cookies || '' ) ) return redirect( '/' );
  } catch {
    throw data( { errors: { message: 'Something went wrong. Please try again later.' } }, { status: 500 } );
  }
};

export default checkAuthLoader;
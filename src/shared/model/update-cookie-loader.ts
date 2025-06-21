import { LoaderFunctionArgs, redirect } from '@remix-run/node';
import cookie from 'cookie';

const updateCookieLoader = ( { request }: LoaderFunctionArgs ) => {
  const cookies = cookie.parse( request.headers.get( 'cookie' ) || '' );
  return cookies['payload-token'] ? redirect( '/' ) : null;
};

export default updateCookieLoader;
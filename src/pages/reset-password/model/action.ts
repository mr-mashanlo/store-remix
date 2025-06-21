import { ActionFunctionArgs, data, redirect } from '@remix-run/node';

const action = async ( { request }: ActionFunctionArgs ) => {
  try {
    console.log( request );
    return redirect( '/' );
  } catch {
    return data( { errors: { email: null, password: null, auth: 'Something went wrong. Please try again later.' } }, { status: 500 } );
  }
};

export default action;
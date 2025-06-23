import { data, redirect } from '@remix-run/node';

const action = async () => {
  try {
    return redirect( '/' );
  } catch {
    return data( { errors: { email: null, password: null, auth: 'Something went wrong. Please try again later.' } }, { status: 500 } );
  }
};

export default action;
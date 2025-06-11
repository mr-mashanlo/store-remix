import { ActionFunctionArgs, data, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { Form, Link, redirect, useActionData } from '@remix-run/react';
import cookie from 'cookie';
import { HTTPError } from 'ky';
import { twMerge } from 'tailwind-merge';
import { ZodError } from 'zod';

import { signIn } from '@/entities/auth';
import { validateAuthFormData } from '@/shared/model/validator/auth-form';

export const meta: MetaFunction = () => {
  return [
    { title: 'Sign in to your account' },
    { name: 'description', content: 'Access your dashboard to manage orders, subscriptions, and settings' }
  ];
};

export function loader( { request }: LoaderFunctionArgs ) {
  const cookies = cookie.parse( request.headers.get( 'cookie' ) || '' );
  return ( cookies['payload-token'] ) ? redirect( '/' ) : null;
}

export async function action( { request }: ActionFunctionArgs ) {
  try {
    const form = await request.formData();
    const body = validateAuthFormData( { email: form.get( 'email' ), password: form.get( 'password' ) } );
    const response = await signIn( request, body );
    return redirect( '/', { headers: { 'Set-Cookie': response.headers.get( 'set-cookie' ) || '' } } );
  } catch ( error ) {
    if ( error instanceof ZodError ) {
      return data( { errors: { ...error.flatten().fieldErrors } }, { status: 400 } );
    } else if ( error instanceof HTTPError ) {
      const response = await error.response.json();
      return data( { errors: { email: null, password: null, auth: response.errors[0].message } }, { status: 400 } );
    } else {
      return data( { errors: { email: null, password: null, auth: 'Something went wrong. Please try again later.' } }, { status: 500 } );
    }
  }
}

export default function Signin() {
  const actionData = useActionData<typeof action>();
  return (
    <Form method="post" aria-describedby="form-error" className="w-full sm:w-80">
      <fieldset>
        <legend className="text-2xl text-center font-bold">Sign in</legend>
        <div className="mt-8">
          <div className="relative">
            <input id="email" name="email" type="email" placeholder="name@company.com" aria-describedby="email-error" className={twMerge( 'peer w-full p-3.5 pl-11 rounded-xl bg-[#f5f5f5] placeholder:text-[#C2C3CB]', actionData?.errors?.email || actionData?.errors?.auth ? 'bg-red-100' : null )} required />
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute top-1/2 left-4 -translate-y-1/2 fill-[#C2C3CB] peer-focus:fill-black" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.94165 7.80858C0.604829 10.7975 0.619843 14.2448 1.08853 17.2216C1.34787 18.8687 2.75539 20.1315 4.49282 20.2757L6.30859 20.4265C10.0947 20.7408 13.9023 20.7408 17.6885 20.4265L19.5042 20.2757C21.2417 20.1315 22.6492 18.8687 22.9085 17.2216C23.3772 14.2448 23.3923 10.7977 23.0554 7.80876C23.0119 7.46224 22.9629 7.11619 22.9085 6.77072C22.6492 5.12358 21.2417 3.86084 19.5042 3.71659L17.6885 3.56583C13.9023 3.25149 10.0947 3.25149 6.30859 3.56583L4.49281 3.71659C2.75539 3.86084 1.34787 5.12358 1.08853 6.77072C1.03415 7.11613 0.985188 7.46212 0.94165 7.80858ZM6.46477 5.28184C10.147 4.97613 13.85 4.97613 17.5323 5.28184L19.348 5.43259C20.255 5.50789 20.9897 6.16705 21.1251 7.02686C21.1392 7.11615 21.1528 7.20548 21.1661 7.29485L14.48 10.8425C12.9368 11.6614 11.0602 11.6614 9.51692 10.8425L2.83092 7.29489C2.84422 7.20551 2.8579 7.11616 2.87196 7.02686C3.00733 6.16705 3.74206 5.50789 4.649 5.43259L6.46477 5.28184ZM21.3868 9.1482C21.62 11.7523 21.5328 14.376 21.1251 16.9655C20.9897 17.8253 20.255 18.4844 19.3481 18.5597L17.5323 18.7105C13.8501 19.0162 10.147 19.0162 6.46478 18.7105L4.649 18.5597C3.74206 18.4844 3.00733 17.8253 2.87196 16.9654C2.46426 14.3761 2.37702 11.7523 2.61023 9.14824L8.64108 12.3482C10.7291 13.4561 13.2679 13.4561 15.3559 12.3482L21.3868 9.1482Z" />
            </svg>
          </div>
          <label htmlFor="email" className="sr-only">Email</label>
          {actionData?.errors?.email ? <p id="email-error" role="alert" className="mt-2 text-xs text-center text-red-400">{actionData?.errors?.email.join( ', ' )}</p> : null}
        </div>
        <div className="mt-5">
          <div className="relative">
            <input id="password" name="password" type="password" placeholder="•••••••••" aria-describedby="password-error" className={twMerge( 'peer w-full p-3.5 pl-11 rounded-xl bg-[#f5f5f5] placeholder:text-[#C2C3CB]', actionData?.errors?.password || actionData?.errors?.auth ? 'bg-red-100' : null )} required />
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute top-1/2 left-4 -translate-y-1/2 fill-[#C2C3CB] peer-focus:fill-black" aria-hidden="true">
              <path d="M10.158 16.9747C10.158 15.9584 10.9819 15.1346 11.9981 15.1346C13.0144 15.1346 13.8383 15.9584 13.8383 16.9747C13.8383 17.991 13.0144 18.8148 11.9981 18.8148C10.9819 18.8148 10.158 17.991 10.158 16.9747Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M6.62696 10.3467L6.23999 6.86393C6.19037 6.41742 6.19037 5.96678 6.23999 5.52027L6.26792 5.26891C6.56416 2.60268 8.66021 0.493069 11.3245 0.179627C11.772 0.126973 12.2242 0.126973 12.6718 0.179627C15.336 0.493069 17.4321 2.60268 17.7283 5.26891L17.7562 5.52027C17.8059 5.96678 17.8059 6.41742 17.7562 6.86393L17.3693 10.3467L18.2116 10.4139C19.5398 10.5199 20.6244 11.5184 20.8397 12.8334C21.2888 15.576 21.2888 18.3734 20.8397 21.116C20.6244 22.431 19.5398 23.4294 18.2116 23.5355L16.3762 23.682C13.4622 23.9146 10.5342 23.9146 7.62018 23.682L5.78479 23.5355C4.45654 23.4294 3.37195 22.431 3.15664 21.116C2.70755 18.3734 2.70755 15.576 3.15664 12.8334C3.37195 11.5184 4.45654 10.5199 5.78479 10.4139L6.62696 10.3467ZM11.5395 2.00716C11.8442 1.97132 12.152 1.97132 12.4568 2.00716C14.2707 2.22057 15.6977 3.65686 15.8994 5.47212L15.9274 5.72348C15.962 6.03494 15.962 6.34927 15.9274 6.66072L15.5334 10.2066C13.179 10.055 10.8173 10.055 8.46286 10.2066L8.06887 6.66073C8.03427 6.34927 8.03427 6.03494 8.06887 5.72348L8.0968 5.47212C8.2985 3.65686 9.72556 2.22057 11.5395 2.00716ZM16.2297 12.1017C13.4132 11.8768 10.5832 11.8768 7.76662 12.1017L5.93122 12.2482C5.44674 12.2869 5.05113 12.6511 4.97259 13.1307C4.55576 15.6764 4.55576 18.273 4.97259 20.8187C5.05113 21.2983 5.44674 21.6625 5.93122 21.7012L7.76662 21.8477C10.5832 22.0725 13.4132 22.0725 16.2297 21.8477L18.0651 21.7012C18.5496 21.6625 18.9452 21.2983 19.0238 20.8187C19.4406 18.273 19.4406 15.6764 19.0238 13.1307C18.9452 12.6511 18.5496 12.2869 18.0651 12.2482L16.2297 12.1017Z" />
            </svg>
          </div>
          <label htmlFor="password" className="sr-only">Password</label>
          {actionData?.errors?.password ? <p id="password-error" role="alert" className="mt-2 text-xs text-center text-red-400">{actionData?.errors.password.join( ', ' )}</p> : null }
        </div>
        <div className="mt-2 text-xs text-right">
          <Link to="/reset" title="Go to reset password page" className="text-[#C2C3CB] hover:text-black">Forget password?</Link>
        </div>
        <button title="Sign in" className="w-full mt-5 p-3.5 rounded-xl bg-black text-white cursor-pointer">Sign in</button>
      </fieldset>
      {actionData?.errors?.auth ? <p id="form-error" role="alert" className="mt-5 text-xs text-center text-red-400">{actionData?.errors.auth}</p> : null}
      <p className="mt-5 text-center leading-6">Don&apos;t have an account? <Link to="/signup" title="Go to register page" className="font-bold hover:underline">Register</Link></p>
    </Form>
  );
}
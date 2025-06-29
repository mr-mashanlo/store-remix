import { Form, Link, useActionData, useNavigation } from '@remix-run/react';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import action from '../model/action';

const ResetPassword: FC = () => {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();

  return (
    <Form method="post" action="/reset" aria-describedby="form-error" className="w-full sm:w-80">
      <fieldset disabled={navigation.formAction === '/signin'}>
        <legend className="text-2xl text-center font-bold">Reset password</legend>
        <label htmlFor="email" className="block mt-8 relative">
          <input id="email" name="email" type="email" placeholder="name@company.com" aria-describedby="email-error" className={twMerge( 'peer w-full p-3.5 pl-11 rounded-xl bg-[#f5f5f5] placeholder:text-[#C2C3CB]', actionData?.errors?.email || actionData?.errors?.auth ? 'bg-red-100' : null )} required />
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-[#C2C3CB] peer-focus:fill-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true">
            <title>Email</title>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.94165 7.80858C0.604829 10.7975 0.619843 14.2448 1.08853 17.2216C1.34787 18.8687 2.75539 20.1315 4.49282 20.2757L6.30859 20.4265C10.0947 20.7408 13.9023 20.7408 17.6885 20.4265L19.5042 20.2757C21.2417 20.1315 22.6492 18.8687 22.9085 17.2216C23.3772 14.2448 23.3923 10.7977 23.0554 7.80876C23.0119 7.46224 22.9629 7.11619 22.9085 6.77072C22.6492 5.12358 21.2417 3.86084 19.5042 3.71659L17.6885 3.56583C13.9023 3.25149 10.0947 3.25149 6.30859 3.56583L4.49281 3.71659C2.75539 3.86084 1.34787 5.12358 1.08853 6.77072C1.03415 7.11613 0.985188 7.46212 0.94165 7.80858ZM6.46477 5.28184C10.147 4.97613 13.85 4.97613 17.5323 5.28184L19.348 5.43259C20.255 5.50789 20.9897 6.16705 21.1251 7.02686C21.1392 7.11615 21.1528 7.20548 21.1661 7.29485L14.48 10.8425C12.9368 11.6614 11.0602 11.6614 9.51692 10.8425L2.83092 7.29489C2.84422 7.20551 2.8579 7.11616 2.87196 7.02686C3.00733 6.16705 3.74206 5.50789 4.649 5.43259L6.46477 5.28184ZM21.3868 9.1482C21.62 11.7523 21.5328 14.376 21.1251 16.9655C20.9897 17.8253 20.255 18.4844 19.3481 18.5597L17.5323 18.7105C13.8501 19.0162 10.147 19.0162 6.46478 18.7105L4.649 18.5597C3.74206 18.4844 3.00733 17.8253 2.87196 16.9654C2.46426 14.3761 2.37702 11.7523 2.61023 9.14824L8.64108 12.3482C10.7291 13.4561 13.2679 13.4561 15.3559 12.3482L21.3868 9.1482Z" />
          </svg>
        </label>
        {actionData?.errors?.email ? <p id="email-error" role="alert" className="mt-2 text-xs text-center text-red-400">{actionData?.errors?.email}</p> : null}
        <button className="w-full mt-5 p-3.5 rounded-xl bg-black text-white cursor-pointer outline-offset-3">Reset</button>
      </fieldset>
      {actionData?.errors?.auth ? <p id="form-error" role="alert" className="mt-5 text-xs text-center text-red-400">{actionData?.errors.auth}</p> : null}
      <p className="mt-5 text-center leading-6">Don&apos;t have an account? <Link to="/signup" title="Go to register page" className="font-bold hover:underline">Register</Link></p>
    </Form>
  );
};

export default ResetPassword;
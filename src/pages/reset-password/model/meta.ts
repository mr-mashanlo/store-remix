import { MetaFunction } from '@remix-run/node';

const meta: MetaFunction = () => {
  return [
    { title: 'Reset your password' },
    { name: 'description', content: 'Forgot your password? Enter your email to receive a secure link and reset your password in minutes' }
  ];
};

export default meta;
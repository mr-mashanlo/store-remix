import { MetaFunction } from '@remix-run/node';

const meta: MetaFunction = () => {
  return [
    { title: 'Create an account' },
    { name: 'description', content: 'Sign up in under a minute and get instant access to all features' }
  ];
};

export default meta;
import { MetaFunction } from '@remix-run/react';

const meta: MetaFunction = () => {
  return [
    { title: 'Sign in to your account' },
    { name: 'description', content: 'Access your dashboard to manage orders, subscriptions, and settings' }
  ];
};

export default meta;
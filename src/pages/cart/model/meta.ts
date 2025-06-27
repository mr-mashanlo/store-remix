import { MetaFunction } from '@remix-run/react';

const meta: MetaFunction = () => {
  return [
    { title: 'Cart' },
    { name: 'description', content: 'View and manage the products in your shopping cart before proceeding to checkout.' }
  ];
};

export default meta;
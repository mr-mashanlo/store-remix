import { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' }
  ];
};

export default function Index() {
  return (
    <div>
      <header>
        <h1>Home Page</h1>
        <Link to="/signin">Signin</Link>
      </header>
    </div>
  );
}
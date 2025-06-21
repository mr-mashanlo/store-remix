import { isRouteErrorResponse, Link, useRouteError } from '@remix-run/react';
import { FC } from 'react';

const ErrorBoundary: FC = () => {
  const error = useRouteError();

  if ( !isRouteErrorResponse( error ) ) return;

  return (
    <main>
      <header className="p-5 absolute top-0 left-0 right-0">
        <Link to="/" title="Go to homepage">
          <img src="/lee.svg" alt="Lee's company" className="h-5" />
        </Link>
      </header>
      <section className="min-h-screen flex items-center justify-center">
        <h1>{error.status}</h1>
        <p>{error.data.errors.message}</p>
      </section>
    </main>
  );
};

export default ErrorBoundary;
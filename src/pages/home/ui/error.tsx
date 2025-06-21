import { isRouteErrorResponse, useRouteError } from '@remix-run/react';
import { FC } from 'react';

const ErrorBoundary: FC = () => {
  const error = useRouteError();

  if ( !isRouteErrorResponse( error ) ) return;

  return (
    <section className="p-3 sm:px-35 py-15">
      <h1 className="mb-10 text-center font-medium">Error {error.status} {error.data.errors.message}</h1>
    </section>
  );
};

export default ErrorBoundary;
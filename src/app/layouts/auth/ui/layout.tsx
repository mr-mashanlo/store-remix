import { Link, Outlet } from '@remix-run/react';
import { FC } from 'react';

const Auth: FC = () => {
  return (
    <>
      <header className="p-5 absolute top-0 left-0 right-0">
        <Link to="/" title="Go to homepage">
          <img src="/lee.svg" alt="Lee's company" className="h-5" />
        </Link>
      </header>
      <main>
        <section className="grid sm:grid-cols-2">
          <div className="min-h-screen p-5 flex items-center justify-center"><Outlet /></div>
          <div className="bg-black" aria-hidden="true"></div>
        </section>
      </main>
    </>
  );
};

export default Auth;
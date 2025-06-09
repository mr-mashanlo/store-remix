import { Link, Outlet } from '@remix-run/react';

export default function Layout() {
  return (
    <div>
      <header role="banner" className="p-6 fixed top-0 left-0 right-0">
        <Link to="/" title="Go to homepage">
          <img src="lee.svg" alt="Lee's company" className="h-6" />
        </Link>
      </header>
      <main role="main" className="grid sm:grid-cols-2">
        <div className="min-h-screen p-5 flex items-center justify-center">
          <Outlet />
        </div>
        <div className="bg-black" aria-hidden="true"></div>
      </main>
    </div>
  );
}
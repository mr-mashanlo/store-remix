import { Link, Outlet } from '@remix-run/react';

export default function Index() {
  return (
    <div>
      <header role="banner" className="p-6">
        <Link to="/" title="Go to homepage">
          <img src="lee.svg" alt="Lee's company" className="h-6" />
        </Link>
      </header>
      <Outlet />
    </div>
  );
}
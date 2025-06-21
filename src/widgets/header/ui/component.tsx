import { Link, NavLink } from '@remix-run/react';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="p-3 sm:px-35 py-5">
      <div className="grid grid-cols-2 sm:grid-cols-6 items-center gap-4">
        <div>
          <Link to="/" title="Go to homepage" className="block w-10 sm:w-10 shrink-0">
            <img src="lee.svg" alt="Lee's company" />
          </Link>
        </div>
        <nav aria-label="Product categories" className="w-full h-full p-10 sm:p-0 sm:col-span-4 bg-white sm:bg-transparent fixed sm:static top-0 right-0 translate-x-full sm:translate-0">
          <ul className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 sm:gap-10">
            <li><NavLink to="/feed/iphone">iPhone</NavLink></li>
            <li><NavLink to="/feed/ipad">iPad</NavLink></li>
            <li><NavLink to="/feed/macbook">MacBook</NavLink></li>
            <li><NavLink to="/feed/watch">Watch</NavLink></li>
          </ul>
        </nav>
        <nav aria-label="Header navigation" className="flex items-center justify-end gap-7">
          <ul className="flex items-center gap-10">
            <li><NavLink to="/about">Account</NavLink></li>
            <li><NavLink to="/cart">Cart (0)</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
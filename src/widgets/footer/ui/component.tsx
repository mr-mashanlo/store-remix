import { Link } from '@remix-run/react';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="p-3 sm:px-35 py-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link to="/" title="Go to homepage" className="block w-10 sm:w-10 shrink-0">
            <img src="/lee.svg" alt="Lee's company" />
          </Link>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 sm:gap-10">
            <li><Link to="/post/terms">Terms and Conditions</Link></li>
            <li><Link to="/post/privacy">Privacy</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
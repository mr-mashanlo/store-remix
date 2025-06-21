import { Outlet } from '@remix-run/react';
import { FC } from 'react';

import { Header } from '@/widgets/header';

const Main: FC = () => {
  return (
    <>
      <Header />
      <main><Outlet /></main>
    </>
  );
};

export default Main;
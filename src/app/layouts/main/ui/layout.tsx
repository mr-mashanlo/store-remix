import { Outlet } from '@remix-run/react';
import { FC } from 'react';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

const Main: FC = () => {
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  );
};

export default Main;
import { Outlet } from '@remix-run/react';
import { FC } from 'react';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { StoreControls } from '@/widgets/store-controls';

const Main: FC = () => {
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <StoreControls />
      <Footer />
    </>
  );
};

export default Main;
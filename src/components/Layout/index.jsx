import FullAppLoader from '../Loaders/FullAppLoader';

import {Suspense} from 'react';
import {lazy} from 'react';
import {Outlet} from 'react-router-dom';

const Footer = lazy(() => import('./Footer'));
const Header = lazy(() => import('./Header'));
const Sidebar = lazy(() => import('./Sidebar'));
const PlayerBar = lazy(() => import('../Player/PlayerBar'));

const Layout = () => {
  return (
    <Suspense fallback={<FullAppLoader />}>
      <div className="flex flex-col justify-between w-screen h-screen bg-appBackground dark:bg-appBackgroundDark text-textLight dark:text-textDark ">
        <Header />
        <div className="flex flex-grow overflow-auto justify-self-start max-w-[99.8%]">
          <Sidebar />
          <Outlet />
        </div>
        <div>
          <PlayerBar />
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

Layout.displayName = 'Layout';

export default Layout;

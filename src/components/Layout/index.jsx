import FullAppLoader from '../Loaders/FullAppLoader';

import {Suspense} from 'react';
import {lazy} from 'react';
import {Outlet} from 'react-router-dom';

const Footer = lazy(() => import('./Footer'));
const Header = lazy(() => import('./Header'));
const Sidebar = lazy(() => import('./Sidebar'));

const Layout = () => {
  return (
    <div className="flex flex-col w-screen h-full  bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark ">
      <Suspense fallback={<FullAppLoader />}>
        <Header />
        <div
          style={{
            height: '90vh',
          }}
          className="flex relative items-stretch w-screen "
        >
          <Sidebar />
          <Outlet />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

Layout.displayName = 'Layout';

export default Layout;

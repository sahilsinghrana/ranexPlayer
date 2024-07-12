import {lazyWithRetry} from "../../utils/reactLazy";
import FullAppLoader from "../Loaders/FullAppLoader";

import {Suspense} from "react";
import {Outlet} from "react-router-dom";

const Footer = lazyWithRetry(() => import("./Footer"));
const Header = lazyWithRetry(() => import("./Header"));
const PlayerBar = lazyWithRetry(() => import("../Player/PlayerBar"));

const Layout = () => {
  return (
    <Suspense fallback={<FullAppLoader />}>
      <div className="flex flex-col justify-between w-screen h-screen">
        <Header />
        <div className="flex flex-grow overflow-auto justify-self-start max-w-[99.8%]">
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

Layout.displayName = "Layout";

export default Layout;

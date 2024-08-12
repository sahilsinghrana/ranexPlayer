import {playerStore} from "../../store/atoms/playerAtom";
import {lazyWithRetry} from "../../utils/reactLazy";
import FullAppLoader from "../Loaders/FullAppLoader";

import {Provider} from "jotai";
import {Suspense} from "react";
import {Outlet} from "react-router-dom";

const Footer = lazyWithRetry(() => import("./Footer"));
const Header = lazyWithRetry(() => import("./Header"));
const PlayerBar = lazyWithRetry(() => import("../Player/PlayerBar"));

const Layout = () => {
  return (
    <Suspense fallback={<FullAppLoader />}>
      <div className="flex flex-col justify-between w-screen h-[100dvh]">
        <Header />
        <div className="flex flex-grow overflow-auto justify-self-start">
          <Outlet />
        </div>
        <div>
          <Provider store={playerStore} min={0}>
            <PlayerBar />
          </Provider>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default Layout;

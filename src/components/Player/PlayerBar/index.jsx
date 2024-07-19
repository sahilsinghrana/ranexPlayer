import {useIsMobile} from "../../../hooks/useMediaQuery";
import {playerStore} from "../../../store/atoms/playerAtom";
import {lazyWithRetry} from "../../../utils/reactLazy";
import MoonLoader from "../../Loaders/MoonLoader";

import {Provider} from "jotai";
import {Suspense} from "react";

const MobilePlayerBar = lazyWithRetry(() => import("./MobileBar"));
const DesktopPlayerBar = lazyWithRetry(() => import("./DesktopPlayerBar"));

const PlayerBar = () => {
  const isMobile = useIsMobile();
  return (
    <Provider store={playerStore} min={0}>
      <Suspense
        fallback={
          <div className="w-full h-full flex justify-center items-center px-3 py-2 bg-neutral-900">
            <MoonLoader />
          </div>
        }
      >
        {isMobile ? (
          <MobilePlayerBar key={isMobile} />
        ) : (
          <DesktopPlayerBar key={isMobile} />
        )}
      </Suspense>
    </Provider>
  );
};

export default PlayerBar;

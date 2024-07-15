import {useIsMobile} from "../../../hooks/useMediaQuery";
import {playerStore} from "../../../store/atoms/playerAtom";
import {lazyWithRetry} from "../../../utils/reactLazy";

import {Provider} from "jotai";

const MobilePlayerBar = lazyWithRetry(() => import("./MobileBar"));
const DesktopPlayerBar = lazyWithRetry(() => import("./DesktopPlayerBar"));

const PlayerBar = () => {
  const isMobile = useIsMobile();

  return (
    <Provider store={playerStore} min={0}>
      {isMobile ? (
        <MobilePlayerBar key={isMobile} />
      ) : (
        <DesktopPlayerBar key={isMobile} />
      )}
    </Provider>
  );
};

export default PlayerBar;

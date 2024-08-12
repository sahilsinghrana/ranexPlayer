import {useIsMobile} from "../../../hooks/useMediaQuery";
import {playerStateAtom, playerStates} from "../../../store/atoms/playerAtom";
import {lazyWithRetry} from "../../../utils/reactLazy";
import PlayerLoader from "../../Loaders/PlayerLoader";

import {useAtomValue} from "jotai/react";
import {Suspense} from "react";

const MobilePlayerBar = lazyWithRetry(() => import("./MobileBar"));
const DesktopPlayerBar = lazyWithRetry(() => import("./DesktopPlayerBar"));

const PlayerBar = () => {
  const isMobile = useIsMobile();
  const playerState = useAtomValue(playerStateAtom);

  if (playerState < playerStates.LOADING) return null;

  return (
    <Suspense fallback={<PlayerLoader />}>
      {isMobile ? (
        <MobilePlayerBar key={isMobile} />
      ) : (
        <DesktopPlayerBar key={isMobile} />
      )}
    </Suspense>
  );
};

export default PlayerBar;

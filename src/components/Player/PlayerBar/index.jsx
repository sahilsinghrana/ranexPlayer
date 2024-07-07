import DesktopPlayerBar from "./DesktopPlayerBar";
import MobilePlayerBar from "./MobileBar";

import {useIsMobile} from "../../../hooks/useMediaQuery";
import {playerStore} from "../../../store/atoms/playerAtom";

import {Provider} from "jotai";

const PlayerBar = () => {
  const isMobile = useIsMobile();

  return (
    <Provider store={playerStore} min={0}>
      {isMobile ? <MobilePlayerBar /> : <DesktopPlayerBar />}
    </Provider>
  );
};

export default PlayerBar;

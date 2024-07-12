import {playerStateAtom, playerStates} from "../../../store/atoms/playerAtom";
import {lazyWithRetry} from "../../../utils/reactLazy";

import {useAtom} from "jotai";

const NextButton = lazyWithRetry(() => import("../../Button/music/NextButton"));

const PlayButton = lazyWithRetry(() => import("../../Button/music/PlayButton"));

const PreviousButton = lazyWithRetry(() =>
  import("../../Button/music/PreviousButton")
);
const PauseButton = lazyWithRetry(() =>
  import("../../Button/music/PauseButton")
);

const PlayerControls = () => {
  const [playerState] = useAtom(playerStateAtom);

  return (
    <div className="inline-flex items-center justify-self-center">
      <div className="inline-flex items-center px-1 py-1 font-black text-white">
        <PreviousButton />
        {playerStates.PLAYING === playerState ? (
          <PauseButton />
        ) : (
          <PlayButton />
        )}
        <NextButton />
      </div>
    </div>
  );
};

export default PlayerControls;

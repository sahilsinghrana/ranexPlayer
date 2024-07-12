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

const PlayerControlsSmall = () => {
  const [playerState] = useAtom(playerStateAtom);

  return (
    <div className="flex items-center text-white">
      <PreviousButton className="w-8 h-8" />
      {playerStates.PLAYING === playerState ? (
        <PauseButton className="w-11 h-11" />
      ) : (
        <PlayButton className="w-11 h-11" />
      )}
      <NextButton className="w-8 h-8" />
    </div>
  );
};

export default PlayerControlsSmall;

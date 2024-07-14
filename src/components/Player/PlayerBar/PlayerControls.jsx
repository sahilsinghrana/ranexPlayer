import {playerStateAtom, playerStates} from "../../../store/atoms/playerAtom";
import {lazyWithRetry} from "../../../utils/reactLazy";
import {clsxWithMerge} from "../../../utils/utils";

import {useAtom} from "jotai";

const NextButton = lazyWithRetry(() => import("../../Button/music/NextButton"));

const PlayButton = lazyWithRetry(() => import("../../Button/music/PlayButton"));

const PreviousButton = lazyWithRetry(() =>
  import("../../Button/music/PreviousButton")
);
const PauseButton = lazyWithRetry(() =>
  import("../../Button/music/PauseButton")
);

const PlayerControls = ({playPauseClass, prevNextClass, className}) => {
  const [playerState] = useAtom(playerStateAtom);

  return (
    <div className="inline-flex items-center justify-self-center">
      <div
        className={clsxWithMerge(
          "inline-flex items-center gap-2 px-1 py-1 font-black text-white",
          className
        )}
      >
        <PreviousButton className={prevNextClass} />
        {playerStates.PLAYING === playerState ? (
          <PauseButton className={playPauseClass} />
        ) : (
          <PlayButton className={playPauseClass} />
        )}
        <NextButton className={prevNextClass} />
      </div>
    </div>
  );
};

export default PlayerControls;

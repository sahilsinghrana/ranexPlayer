import {playerStateAtom, playerStates} from "../../../store/atoms/playerAtom";
import {lazyWithRetry} from "../../../utils/reactLazy";
import PauseButton from "../../Button/music/PauseButton";
import PlayButton from "../../Button/music/PlayButton";

import {useAtom} from "jotai";

const PreviousButton = lazyWithRetry(() =>
  import("../../Button/music/PreviousButton")
);
const NextButton = lazyWithRetry(() => import("../../Button/music/NextButton"));

const PlayerControlsSmall = () => {
  const [playerState] = useAtom(playerStateAtom);
  return (
    <div className="flex items-center gap-1 text-white">
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

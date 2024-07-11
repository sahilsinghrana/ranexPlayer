import {playerStateAtom, playerStates} from "../../../store/atoms/playerAtom";
import {NextButton, PlayButton, PreviousButton} from "../../Button/music";
import PauseButton from "../../Button/music/PauseButton";

import {useAtom} from "jotai";

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

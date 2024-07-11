import {playerStateAtom, playerStates} from "../../../store/atoms/playerAtom";
import {NextButton, PlayButton, PreviousButton} from "../../Button/music";
import PauseButton from "../../Button/music/PauseButton";

import {useAtom} from "jotai";

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

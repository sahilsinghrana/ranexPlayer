import song from "../../../assets/music/yrym.mp3";
import player from "../../../lib/player";
import {playerStateAtom, playerStates} from "../../../store/atoms/playerAtom";
import {NextButton, PlayButton, PreviousButton} from "../../Button/music";
import PauseButton from "../../Button/music/PauseButton";

import {useAtom} from "jotai";
import {useEffect} from "react";

const PlayerControls = () => {
  const [playerState] = useAtom(playerStateAtom);

  const handlePlay = () => {
    player.play();
  };

  const handlePause = () => {
    player.pause();
  };

  useEffect(() => {
    player.load(song);
  }, []);

  return (
    <div className="inline-flex items-center place-self-center">
      {/* <div className="px-3 py-2 ">
        <ShuffleButton />
      </div> */}
      <div className="inline-flex items-center px-1 py-1 font-black text-white">
        <PreviousButton />
        {playerStates.PLAYING === playerState ? (
          <PauseButton onClick={handlePause} />
        ) : (
          <PlayButton onClick={handlePlay} />
        )}
        <NextButton />
      </div>
      {/* <div className="px-3 py-2">
        <LoopButton />
      </div> */}
    </div>
  );
};

export default PlayerControls;

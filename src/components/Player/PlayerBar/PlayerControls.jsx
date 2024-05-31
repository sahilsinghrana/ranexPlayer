import song from '../../../assets/music/yrym.mp3';
import player from '../../../lib/player';
import {
  LoopButton,
  NextButton,
  PlayButton,
  PreviousButton,
  ShuffleButton,
} from '../../Button/music';

import {useEffect} from 'react';

const PlayerControls = () => {
  const handlePlay = () => {
    player.loadAndPlay(song);
  };

  useEffect(() => {
    console.log(player.meta);
  }, []);

  return (
    <div className="flex items-center justify-self-center">
      <button onClick={() => console.log(player)}>Meta</button>
      <div className="px-3 py-2">
        <ShuffleButton />
      </div>
      <div className="flex items-center px-1 py-1 font-black text-white">
        <PreviousButton />
        <PlayButton onClick={handlePlay} />
        <NextButton />
      </div>
      <div className="px-3 py-2">
        <LoopButton />
      </div>
    </div>
  );
};

export default PlayerControls;

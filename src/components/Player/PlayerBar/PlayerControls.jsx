import {
  LoopButton,
  NextButton,
  PlayButton,
  PreviousButton,
  ShuffleButton,
} from '../../Button/music';

const PlayerControls = () => {
  return (
    <div className="flex flex-1 items-center">
      <div className="px-3 py-2">
        <ShuffleButton />
      </div>
      <div className="flex items-center px-1 py-1 font-black text-white">
        <PreviousButton />
        <PlayButton />
        <NextButton />
      </div>
      <div className="px-3 py-2">
        <LoopButton />
      </div>
    </div>
  );
};

export default PlayerControls;

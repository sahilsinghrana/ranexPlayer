import Button from '../../Button/Button';

import {
  TrackNextIcon,
  PlayIcon,
  TrackPreviousIcon,
  ShuffleIcon,
  LoopIcon,
} from '@radix-ui/react-icons';

const PlayerControls = () => {
  return (
    <div className="flex items-center flex-1">
      <div className="px-3 py-2">
        <ShuffleIcon />
      </div>
      <div className="flex items-center px-3 py-1 font-black text-white">
        <Button size="sm" rounded="lg" className={'m-1'}>
          <TrackPreviousIcon />
        </Button>
        <Button size="lg" rounded="lg" className={'m-1 px-2'}>
          <PlayIcon scale={3} height={30} width={30} />
        </Button>
        <Button size="sm" rounded="lg" className={'m-1'}>
          <TrackNextIcon />
        </Button>
      </div>
      <div className="px-3 py-2">
        <LoopIcon />
      </div>
    </div>
  );
};

export default PlayerControls;

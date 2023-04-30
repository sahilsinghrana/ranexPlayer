import PlayerControls from './PlayerControls';

import {
  HeartIcon,
  SpeakerLoudIcon,
  ListBulletIcon,
  ShuffleIcon,
  LoopIcon,
} from '@radix-ui/react-icons';

const PlayerBar = () => {
  return (
    <div className=" fixed bottom-0 py-3 flex w-full justify-between items-center justify-self-end bg-slate-600 dark:bg-slate-950">
      <div className="flex items-center flex-1">
        <img className="h-14 w-14 bg-white" href="/" alt="cover art" />
        <div className="mx-2">
          <div className="text-slate-300">Song Name</div>
          <div className="text-sm text-slate-300">Artist Name</div>
        </div>
        <div>
          <HeartIcon />
        </div>
      </div>
      <div className="flex items-center flex-1">
        <div className="px-3 py-2">
          <ShuffleIcon />
        </div>
        <PlayerControls />
        <div className="px-3 py-2">
          <LoopIcon />
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="p-2 mx-1 bg-zinc-950">
          <ListBulletIcon />
        </div>
        <div className="p-2 mx-1 bg-zinc-950">
          <SpeakerLoudIcon />
        </div>
      </div>
    </div>
  );
};

PlayerBar.displayName = 'PlayerBar';

export default PlayerBar;

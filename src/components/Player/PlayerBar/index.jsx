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
    <div className="fixed bottom-0 flex items-center justify-between w-full py-3 justify-self-end bg-subtleBackground dark:bg-subtleBackgroundDark">
      <div className="flex items-center flex-1">
        <img
          className="bg-elementBackground dar:bg-elementBackgroundDark h-14 w-14"
          href="/"
          alt="cover art"
        />
        <div className="mx-2">
          <div className="text-text dark:text-textDark">Song Name</div>
          <div className="text-sm text-text dark:text-textDark">
            Artist Name
          </div>
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
      <div className="flex justify-end flex-1">
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

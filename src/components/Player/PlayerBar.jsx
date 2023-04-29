import {
  HeartIcon,
  SpeakerLoudIcon,
  ListBulletIcon,
  TrackNextIcon,
  PlayIcon,
  TrackPreviousIcon,
  ShuffleIcon,
  LoopIcon,
} from '@radix-ui/react-icons';

const PlayerBar = () => {
  return (
    <div className=" fixed bottom-0 flex w-full justify-between items-center justify-self-end bg-slate-600 dark:bg-slate-950">
      <div className="flex items-center flex-1">
        <img className="h-14 w-14 bg-white" href="/" alt="cover art" />
        <div className="mx-2">
          <div>Song Name</div>
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
        <div className="flex  px-3 py-2">
          <div className="p-2 mx-1 bg-zinc-950">
            <TrackPreviousIcon />
          </div>
          <div className="p-2 mx-1 bg-zinc-950">
            <PlayIcon />
          </div>
          <div className="p-2 mx-1 bg-zinc-950">
            <TrackNextIcon />
          </div>
        </div>
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

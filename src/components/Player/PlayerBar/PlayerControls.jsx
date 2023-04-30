import {
  TrackNextIcon,
  PlayIcon,
  TrackPreviousIcon,
} from '@radix-ui/react-icons';

const PlayerControls = () => {
  return (
    <div className="flex  px-3 py-1">
      <button className="p-2 mx-1 flex items-center bg-zinc-300 rounded-lg dark:bg-zinc-800">
        <TrackPreviousIcon />
      </button>
      <button className="p-1 mx-1 flex items-center bg-zinc-300 rounded-lg text-4xl dark:bg-zinc-800">
        <PlayIcon scale={3} height={30} width={30} />
      </button>
      <button className="p-2 mx-1 flex items-center bg-zinc-300 rounded-lg dark:bg-zinc-800">
        <TrackNextIcon />
      </button>
    </div>
  );
};

export default PlayerControls;

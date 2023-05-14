import {
  TrackNextIcon,
  PlayIcon,
  TrackPreviousIcon,
} from '@radix-ui/react-icons';

const PlayerControls = () => {
  return (
    <div className="flex px-3 py-1">
      <button className="flex items-center p-2 mx-1 rounded-lg bg-accent-3 dark:bg-accentDark-3">
        <TrackPreviousIcon />
      </button>
      <button className="flex items-center p-1 mx-1 text-4xl rounded-lg bg-accent-3 dark:bg-accentDark-3">
        <PlayIcon scale={3} height={30} width={30} />
      </button>
      <button className="flex items-center p-2 mx-1 rounded-lg bg-accent-3 dark:bg-accentDark-3">
        <TrackNextIcon />
      </button>
    </div>
  );
};

export default PlayerControls;

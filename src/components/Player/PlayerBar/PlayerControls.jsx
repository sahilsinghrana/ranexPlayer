import {
  TrackNextIcon,
  PlayIcon,
  TrackPreviousIcon,
} from '@radix-ui/react-icons';

const PlayerControls = () => {
  return (
    <div className="flex px-3 py-1 font-black text-white">
      <button className="flex items-center p-2 mx-1 transition-colors duration-300 rounded-lg bg-elementBackgroundDark hover:bg-hoverBackgroundDark ">
        <TrackPreviousIcon />
      </button>
      <button className="flex items-center p-1 mx-1 text-4xl transition-colors duration-300 rounded-lg bg-elementBackgroundDark hover:bg-hoverBackgroundDark ">
        <PlayIcon scale={3} height={30} width={30} />
      </button>
      <button className="flex items-center p-2 mx-1 transition-colors duration-300 rounded-lg bg-elementBackgroundDark hover:bg-hoverBackgroundDark ">
        <TrackNextIcon />
      </button>
    </div>
  );
};

export default PlayerControls;

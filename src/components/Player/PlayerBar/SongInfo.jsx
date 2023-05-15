import {HeartIcon} from '@radix-ui/react-icons';

const SongInfo = () => {
  return (
    <div className="flex items-center flex-1">
      <img
        className="bg-elementBackground dar:bg-elementBackgroundDark h-14 w-14"
        href="/"
        alt="cover art"
      />
      <div className="mx-2">
        <div className="text-text dark:text-textDark">Song Name</div>
        <div className="text-sm text-text dark:text-textDark">Artist Name</div>
      </div>
      <div>
        <HeartIcon />
      </div>
    </div>
  );
};

export default SongInfo;

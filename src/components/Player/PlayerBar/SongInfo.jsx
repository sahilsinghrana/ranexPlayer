import AlbumArt from "../../AlbumArt";

import {memo} from "react";

const SongInfo = () => {
  return (
    <div className="inline-flex items-center place-self-start ">
      <AlbumArt />
      <div className="ml-3 ">
        <div className="font-black text-neutral-700 dark:text-neutral-200">
          Song Name
        </div>
        <div className="text-sm text-text dark:text-textDark">Artist Name</div>
      </div>
    </div>
  );
};

export default memo(SongInfo);

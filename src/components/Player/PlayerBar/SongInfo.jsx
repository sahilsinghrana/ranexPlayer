import AlbumArt from "../../AlbumArt";

import {HeartIcon} from "@radix-ui/react-icons";
import {memo} from "react";

const SongInfo = () => {
  return (
    <div className="inline-flex items-center place-self-start ">
      <AlbumArt />
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

export default memo(SongInfo);

import NowPlayingAlbumArt from "../../AlbumArt/NowPlayingAlbumArt";

import {memo} from "react";

const SongInfo = () => {
  return (
    <div className="inline-flex items-center place-self-start ">
      <NowPlayingAlbumArt />
      <div className="ml-3 ">
        <div className="font-black text-neutral-200">Song Name</div>
        <div className="text-sm text-neutral-400">Artist Name</div>
      </div>
    </div>
  );
};

export default memo(SongInfo);

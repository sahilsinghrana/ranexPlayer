import {lazyWithRetry} from "../../../utils/reactLazy";

import {memo} from "react";

const NowPlayingAlbumArt = lazyWithRetry(() =>
  import("../../AlbumArt/NowPlayingAlbumArt")
);

const SongInfo = () => {
  return (
    <div className="inline-flex items-center py-1 h-14 justify-self-start">
      <NowPlayingAlbumArt />
      <div className="ml-2">
        <div className="text-md text-neutral-100">Song Name</div>
        <div className="text-[10px] text-neutral-300">Artist Name</div>
      </div>
    </div>
  );
};

export default memo(SongInfo);

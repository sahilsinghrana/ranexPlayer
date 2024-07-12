import {lazyWithRetry} from "../../../utils/reactLazy";

import {memo} from "react";

const NowPlayingAlbumArt = lazyWithRetry(() =>
  import("../../AlbumArt/NowPlayingAlbumArt")
);

const SongInfo = () => {
  return (
    <div className="inline-flex items-center justify-self-start ">
      <NowPlayingAlbumArt />
      <div className="ml-3 ">
        <div className="font-bold text-neutral-200">Song Name</div>
        <div className="text-xs text-neutral-200">Artist Name</div>
      </div>
    </div>
  );
};

export default memo(SongInfo);

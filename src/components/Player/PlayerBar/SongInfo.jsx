import {currentSongAtom} from "../../../store/atoms/playerAtom";
import {lazyWithRetry} from "../../../utils/reactLazy";

import {useAtomValue} from "jotai/react";
import {memo} from "react";

const NowPlayingAlbumArt = lazyWithRetry(() =>
  import("../../AlbumArt/NowPlayingAlbumArt")
);

const SongInfo = () => {
  const currentSong = useAtomValue(currentSongAtom);
  return (
    <div className="inline-flex items-center py-1 h-14 justify-self-start">
      <NowPlayingAlbumArt albumArtSrc={currentSong?.meta?.albumArtSrc} />
      <div className="ml-2">
        <div className="text-md text-neutral-100">
          {currentSong?.meta?.title}
        </div>
        <div className="text-[10px] text-neutral-300">
          {currentSong?.meta?.artist}
        </div>
      </div>
    </div>
  );
};

export default memo(SongInfo);

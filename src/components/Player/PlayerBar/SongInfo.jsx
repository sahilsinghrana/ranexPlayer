import {currentSongAtom} from "../../../store/atoms/playerAtom";
import {lazyWithRetry} from "../../../utils/reactLazy";

import clsx from "clsx";
import {useAtomValue} from "jotai/react";
import {memo} from "react";

const NowPlayingAlbumArt = lazyWithRetry(() =>
  import("../../AlbumArt/NowPlayingAlbumArt")
);

const SongInfo = () => {
  const currentSong = useAtomValue(currentSongAtom);
  const title = currentSong?.meta?.title || "";
  const artist = currentSong?.meta?.artist || "";
  return (
    <div className="inline-flex items-center py-1 h-14 justify-self-start">
      <NowPlayingAlbumArt albumArtSrc={currentSong?.meta?.albumArtSrc} />
      <div className="ml-2 overflow-hidden max-w-fit">
        <div
          className={clsx(
            "text-md sm:animate-none w-[100px] text-nowrap text-neutral-100",
            {
              "animate-marquee": title.length > 15,
            }
          )}
        >
          {title}
        </div>
        <div
          className={clsx(
            "text-[10px] text-nowrap sm:animate-none  w-full pr-4 text-neutral-300",
            {
              "animate-marquee": artist.length > 17,
            }
          )}
        >
          {artist}
        </div>
      </div>
    </div>
  );
};

export default memo(SongInfo);

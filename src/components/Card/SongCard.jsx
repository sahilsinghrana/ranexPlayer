import {getRandomMoonAndMusicImage} from "../../assets/images/moonAndMusic/moonAndMusicImages";
import {clsxWithMerge} from "../../utils/utils";
import AlbumArt from "../AlbumArt";

import {memo} from "react";

function SongCard({
  title,
  artist,
  albumArtSrc = getRandomMoonAndMusicImage(),
  className,
}) {
  return (
    <div
      className={clsxWithMerge(
        "flex  w-[85vw] sm:w-full min-w-[200px] h-[80px] gap-1 items-center bg-gray-800 m-2",
        className
      )}
    >
      <AlbumArt className="h-full w-min" src={albumArtSrc} />
      <div className="ml-2 flex h-full flex-col justify-center">
        <h5 className="text-sm font-semibold text-neutral-50/80">{title}</h5>
        <h5 className="text-xs text-neutral-300/80">{artist}</h5>
      </div>
    </div>
  );
}

export default memo(SongCard);

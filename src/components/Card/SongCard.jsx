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
        "flex w-[85vw] sm:w-full min-w-[200px] sm:min-w-[280px] h-[80px] gap-1 items-center bg-neutral-800 rounded-sm overflow-hidden",
        className
      )}
    >
      <AlbumArt className="h-full w-[80px]" src={albumArtSrc} />
      <div className="flex flex-col justify-center h-full ml-2">
        <h5 className="font-semibold text-md text-neutral-50/80">{title}</h5>
        <h5 className="text-xs text-neutral-300/80">{artist}</h5>
      </div>
    </div>
  );
}

export default memo(SongCard);

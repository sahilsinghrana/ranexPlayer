import {getRandomMoonAndMusicImage} from "../../assets/images/moonAndMusic/moonAndMusicImages";
// import axiosInstance from "../../helpers/axiosInstance";
import player from "../../lib/player";
import {clsxWithMerge} from "../../utils/utils";
import AlbumArt from "../AlbumArt";

import {memo} from "react";

function SongCard({
  title,
  artist,
  albumArtSrc = getRandomMoonAndMusicImage(),
  className,
  songId,
  path,
}) {
  return (
    <div
      onClick={() => {
        // axiosInstance.get("/music/song/" + songId).then((res) => {
        //   console.log(res);
        // });
        player.loadAndPlay(path, {
          title,
          artist,
          albumArtSrc,
          songId,
        });
      }}
      className={clsxWithMerge(
        "flex cursor-pointer w-[85vw] sm:w-full min-w-[200px] sm:min-w-[280px] h-[80px] gap-1 items-center bg-neutral-800 rounded-sm overflow-hidden",
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

import {getRandomMoonAndMusicImage} from "../../assets/images/moonAndMusic/moonAndMusicImages";
// import axiosInstance from "../../helpers/axiosInstance";
import player from "../../lib/player";
import {convertToHttps} from "../../utils/helpers";
import {clsxWithMerge} from "../../utils/utils";
import AlbumArt from "../AlbumArt";

import clsx from "clsx";
import {memo} from "react";

function SongCard({song = {}}) {
  const {
    title,
    artist,
    coverArt,
    className,
    // songId,
    path,
  } = song;
  const albumArtSrc =
    coverArt?.thumbnails?.small ||
    coverArt?.thumbnails?.large ||
    getRandomMoonAndMusicImage();
  return (
    <div
      onClick={() => {
        // axiosInstance.get("/music/song/" + songId).then((res) => {
        //   console.log(res);
        // });
        player.loadAndPlay(path, song);
      }}
      className={clsxWithMerge(
        "flex cursor-pointer w-[85dvw] sm:max-w-[300px] h-[80px] gap-1 items-center bg-neutral-800 rounded-sm overflow-hidden",
        className
      )}
    >
      <AlbumArt className="h-full w-[80px]" src={convertToHttps(albumArtSrc)} />
      <div className="flex flex-col justify-center h-full ml-2 overflow-hidden">
        <h5
          className={clsx(
            "font-semibold text-ellipsis w-fit text-md text-neutral-50/80",
            {
              "sm:animate-marquee": title.length > 15,
            }
          )}
        >
          {title}
        </h5>
        <h5
          className={clsx("text-xs text-ellipsis w-fit text-neutral-300/80", {
            "sm:animate-marquee": artist.length > 17,
          })}
        >
          {artist}
        </h5>
      </div>
    </div>
  );
}

export default memo(SongCard);

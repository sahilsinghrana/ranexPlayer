import {getRandomMoonAndMusicImage} from "../../assets/images/moonAndMusic/moonAndMusicImages";
import {getSongInfo} from "../../helpers/songs";
import {clsxWithMerge} from "../../utils/utils";
import AlbumArt from "../AlbumArt";

import {memo, useEffect, useState} from "react";

function SongCard({
  title,
  artist,
  albumArtSrc = getRandomMoonAndMusicImage(),
  className,
}) {
  const [songInfo, setSongInfo] = useState({});
  useEffect(() => {
    if (title && artist)
      getSongInfo(artist, title)
        .then((info) => {
          console.log({title, artist, info});
          if (info) {
            setSongInfo(info);
          }
        })
        .catch((err) => {
          console.log(err);
        });
  }, [title, artist]);
  return (
    <div
      className={clsxWithMerge(
        "flex w-[85vw] sm:w-full min-w-[200px] sm:min-w-[280px] h-[80px] gap-1 items-center bg-neutral-800 rounded-sm overflow-hidden",
        className
      )}
    >
      <AlbumArt
        className="h-full w-[80px]"
        src={songInfo?.coverArt || albumArtSrc}
      />
      <div className="flex flex-col justify-center h-full ml-2">
        <h5 className="font-semibold text-md text-neutral-50/80">
          {songInfo?.title || title}
        </h5>
        <h5 className="text-xs text-neutral-300/80">{artist}</h5>
      </div>
    </div>
  );
}

export default memo(SongCard);

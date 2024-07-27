import AlbumArt from "./index";

import {currentPlayingAlbumArtImage} from "../../store/atoms/playerAtom";

import clsx from "clsx";
import {useAtomValue} from "jotai";
import {memo} from "react";
import {twMerge} from "tailwind-merge";

function NowPlayingAlbumArt({className, size}) {
  const albumArtImage = useAtomValue(currentPlayingAlbumArtImage);
  const thumbnailImage = albumArtImage?.thumbnail;
  const mainImgSrc = size === "lg" ? albumArtImage?.image : thumbnailImage;
  return (
    <AlbumArt
      className={twMerge(
        clsx(
          "bg-black object-cover h-full shadow-lg rounded-lg shadow-black/70",
          className
        )
      )}
      style={{
        backgroundImage: `url("${thumbnailImage}")`,
        backgroundSize: "cover",
      }}
      src={mainImgSrc}
      alt="cover art"
    />
  );
}

export default memo(NowPlayingAlbumArt);

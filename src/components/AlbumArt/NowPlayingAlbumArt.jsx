import AlbumArt from "./index";

import {currentPlayingAlbumArtImage} from "../../store/atoms/playerAtom";

import clsx from "clsx";
import {useAtomValue} from "jotai";
import {memo} from "react";
import {twMerge} from "tailwind-merge";

function NowPlayingAlbumArt({className}) {
  const albumArtImage = useAtomValue(currentPlayingAlbumArtImage);
  // const setImageColors = useSetAtom(currentPlayingAlbumArtColorsAtom);

  // useEffect(() => {
  //   if (!albumArtImage) {
  //     const image = albumArtSrc || getRandomMoonAndMusicImage();
  //     setAlbumArtImage(image);
  //     if (image) {
  //       const newImage = document.createElement("img");
  //       newImage.src = image;
  //       newImage.onload = () => {
  //         const imageColors = getAverageRGB(newImage);
  //         setImageColors(imageColors);
  //       };
  //     }
  //   }
  // }, [setAlbumArtImage, albumArtImage, setImageColors, albumArtSrc]);

  return (
    <AlbumArt
      className={twMerge(
        clsx(
          "bg-black object-cover h-full shadow-lg rounded-lg shadow-black/70",
          className
        )
      )}
      src={albumArtImage}
      alt="cover art"
    />
  );
}

export default memo(NowPlayingAlbumArt);

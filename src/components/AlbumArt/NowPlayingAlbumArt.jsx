import {getRandomMoonAndMusicImage} from "../../assets/images/moonAndMusic/moonAndMusicImages";
import {
  currentPlayingAlbumArtColorsAtom,
  currentPlayingAlbumArtImage,
} from "../../store/atoms/playerAtom";
import {getAverageRGB} from "../../utils/imageHelpers";

import clsx from "clsx";
import {useAtom, useSetAtom} from "jotai";
import {useEffect} from "react";
import {twMerge} from "tailwind-merge";

function NowPlayingAlbumArt({className}) {
  const [albumArtImage, setAlbumArtImage] = useAtom(
    currentPlayingAlbumArtImage
  );
  const setImageColors = useSetAtom(currentPlayingAlbumArtColorsAtom);

  useEffect(() => {
    if (!albumArtImage) {
      const image = getRandomMoonAndMusicImage();
      setAlbumArtImage(image);
      if (image) {
        const newImage = document.createElement("img");
        newImage.src = image;
        newImage.onload = () => {
          const imageColors = getAverageRGB(newImage);
          setImageColors(imageColors);
        };
      }
    }
  }, [setAlbumArtImage, albumArtImage, setImageColors]);

  return (
    <img
      className={twMerge(
        clsx(
          "bg-black object-cover h-full shadow-lg shadow-black/70",
          className
        )
      )}
      src={albumArtImage}
      alt="cover art"
    />
  );
}

export default NowPlayingAlbumArt;

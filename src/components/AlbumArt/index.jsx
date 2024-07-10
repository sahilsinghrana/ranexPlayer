import {getRandomMoonAndMusicImage} from "../../assets/images/moonAndMusic/moonAndMusicImages";

import clsx from "clsx";
import {useEffect, useState} from "react";
import {twMerge} from "tailwind-merge";

function AlbumArt({className}) {
  const [albumArtImage, setAlbumArtImage] = useState(async () => {});

  useEffect(() => {
    (async () => {
      const image = await getRandomMoonAndMusicImage();
      setAlbumArtImage(image);
    })();
  }, []);

  return (
    <img
      className={twMerge(clsx("bg-black h-14 w-14", className))}
      src={albumArtImage}
      alt="cover art"
    />
  );
}

export default AlbumArt;

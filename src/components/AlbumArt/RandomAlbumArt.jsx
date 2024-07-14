import AlbumArt from "./index";

import {getRandomMoonAndMusicImage} from "../../assets/images/moonAndMusic/moonAndMusicImages";

import {memo, useEffect, useState} from "react";

function RandomAlbumArt() {
  const [albumArtImage, setAlbumArtImage] = useState();

  useEffect(() => {
    const image = getRandomMoonAndMusicImage();
    setAlbumArtImage(image);
  }, []);

  return <AlbumArt src={albumArtImage} />;
}

export default memo(RandomAlbumArt);

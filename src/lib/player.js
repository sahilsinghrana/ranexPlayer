import MusicPlayer from "./MusicPlayer";

import {getRandomMoonAndMusicImage} from "../assets/images/moonAndMusic/moonAndMusicImages";
import globalStore from "../store";
import {
  currentPlayingAlbumArtColorsAtom,
  currentPlayingAlbumArtImage,
  currentSongAtom,
  playerStateAtom,
  playerStates,
  playerVolumeAtom,
} from "../store/atoms/playerAtom";
import {convertToHttps} from "../utils/helpers";
import {getAverageRGB} from "../utils/imageHelpers";

const player = new MusicPlayer();

globalStore.set(playerVolumeAtom, () => player.audioEl.volume);

player.attachListener("loadeddata", () => {
  globalStore.set(playerStateAtom, () => playerStates.LOADED);
});

player.attachListener("loadstart", () => {
  globalStore.set(playerStateAtom, () => playerStates.LOADING);
});

player.attachListener("playing", () => {
  globalStore.set(playerStateAtom, () => playerStates.PLAYING);
});

player.attachListener("pause", () => {
  globalStore.set(playerStateAtom, () => playerStates.PAUSED);
});

player.attachListener("ended", () => {
  globalStore.set(playerStateAtom, () => playerStates.STOPPED);
});

player.attachListener("durationchange", () => {
  globalStore.set(currentSongAtom, (prev = {}) => {
    return {
      ...prev,
      meta: {
        ...(prev.meta || {}),
        duration: player.audioEl.duration,
      },
    };
  });
});

player.attachListener("timeupdate", () => {
  globalStore.set(currentSongAtom, (prev = {}) => {
    return {
      meta: {
        ...(prev.meta || {}),
        currentTime: player.audioEl.currentTime,
      },
    };
  });
});

player.attachListener("onvolumechange", () => {
  globalStore.set(playerVolumeAtom, () => player.audioEl.volume);
});

player.attachListener("songchange", (song, meta = {}) => {
  globalStore.set(currentSongAtom, (prev = {}) => {
    return {
      ...prev,
      meta: meta,
    };
  });

  const randImage = getRandomMoonAndMusicImage();

  const thumbnailSmall = convertToHttps(meta?.coverArt?.thumbnails?.small);
  const thumbnailLarge = convertToHttps(meta?.coverArt?.thumbnails?.large);
  const mainImage = convertToHttps(meta?.coverArt?.image);

  const albumArtSrc =
    thumbnailSmall || thumbnailLarge || mainImage || randImage;

  globalStore.set(currentPlayingAlbumArtImage, {
    image: mainImage || thumbnailLarge || thumbnailSmall || randImage,
    thumbnail: thumbnailSmall || thumbnailLarge || mainImage || randImage,
  });

  setImageColors(albumArtSrc);
});

export default player;

async function setImageColors(albumArtSrc) {
  if (albumArtSrc) {
    const newImage = new Image();
    newImage.src = albumArtSrc;
    newImage.crossOrigin = "Anonymous";
    newImage.onload = (e) => {
      const imageColors = getAverageRGB(newImage);
      globalStore.set(currentPlayingAlbumArtColorsAtom, imageColors);
    };
  }
}

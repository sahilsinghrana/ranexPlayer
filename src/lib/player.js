import MusicPlayer from "./MusicPlayer";

import {getRandomMoonAndMusicImage} from "../assets/images/moonAndMusic/moonAndMusicImages";
import {
  currentPlayingAlbumArtColorsAtom,
  currentPlayingAlbumArtImage,
  currentSongAtom,
  playerStateAtom,
  playerStates,
  playerStore,
  playerVolumeAtom,
} from "../store/atoms/playerAtom";
import {convertToHttps} from "../utils/helpers";
import {getAverageRGB} from "../utils/imageHelpers";

const player = new MusicPlayer();

player.attachListener("loadeddata", () => {
  playerStore.set(playerStateAtom, () => playerStates.LOADED);
});

player.attachListener("loadstart", () => {
  playerStore.set(playerStateAtom, () => playerStates.LOADING);
});

player.attachListener("playing", () => {
  playerStore.set(playerStateAtom, () => playerStates.PLAYING);
});

player.attachListener("pause", () => {
  playerStore.set(playerStateAtom, () => playerStates.PAUSED);
});

player.attachListener("ended", () => {
  playerStore.set(playerStateAtom, () => playerStates.STOPPED);
});

player.attachListener("durationchange", () => {
  playerStore.set(currentSongAtom, (prev = {}) => {
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
  playerStore.set(currentSongAtom, (prev = {}) => {
    return {
      meta: {
        ...(prev.meta || {}),
        currentTime: player.audioEl.currentTime,
      },
    };
  });
});

player.attachListener("onvolumechange", () => {
  playerStore.set(playerVolumeAtom, () => player.audioEl.volume);
});

player.attachListener("songchange", (song, meta = {}) => {
  playerStore.set(currentSongAtom, (prev = {}) => {
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

  playerStore.set(currentPlayingAlbumArtImage, {
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
      playerStore.set(currentPlayingAlbumArtColorsAtom, imageColors);
    };
  }
}

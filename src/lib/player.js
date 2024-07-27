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
import {getAverageRGB} from "../utils/imageHelpers";

const player = new MusicPlayer();

// attachEventListenersToAudio(this.audioEl, this);
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

player.attachListener("loadstart", () => {
  playerStore.set(playerStateAtom, () => playerStates.LOADED);
  const albumArtSrc = player.meta?.albumArtSrc || getRandomMoonAndMusicImage();
  playerStore.set(currentPlayingAlbumArtImage, albumArtSrc);
  if (albumArtSrc) {
    console.log({
      albumArtSrc,
    });
    const newImage = new Image();
    newImage.src = albumArtSrc;
    newImage.crossOrigin = "anonymous";
    newImage.onload = () => {
      const imageColors = getAverageRGB(newImage);
      playerStore.set(currentPlayingAlbumArtColorsAtom, imageColors);
    };
  }
  playerStore.set(currentSongAtom, (prev = {}) => {
    return {
      meta: {
        ...(prev.meta || {}),
        ...(player.meta || {}),
      },
    };
  });
});

export default player;

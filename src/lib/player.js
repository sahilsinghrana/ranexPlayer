import MusicPlayer from "./MusicPlayer";

import {
  currentSongAtom,
  playerStateAtom,
  playerStates,
  playerStore,
  playerVolumeAtom,
} from "../store/atoms/playerAtom";

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

export default player;

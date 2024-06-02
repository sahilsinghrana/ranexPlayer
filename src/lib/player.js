import MusicPlayer from "./MusicPlayer";

import {
  playerStateAtom,
  playerStates,
  playerStore,
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

export default player;

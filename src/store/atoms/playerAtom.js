import {atom, createStore} from "jotai";

export const playerStates = {
  INITIALIZED: "INITIALIZED",
  PLAYING: "PLAYING",
  STOPPED: "STOPPED",
  PAUSED: "PAUSED",
};

export const playerStateAtom = atom(playerStates.INITIALIZED);
export const currentSongAtom = atom();
export const currentPlaylistAtom = atom({id: ""});
export const queueAtom = atom([]);
export const playerVolumeAtom = atom();

const playerAtom = atom({
  playerState: playerStateAtom,
  currentSong: currentSongAtom,
  currentPlaylist: currentPlaylistAtom,
  queue: queueAtom,
});

export const playerStore = createStore();

export default playerAtom;

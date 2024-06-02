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

const playerAtom = atom({
  playerState: playerStateAtom,
  currentSong: currentSongAtom,
  currentPlaylist: currentPlaylistAtom,
  queue: queueAtom,
});

export const playerStore = createStore();

// playerStore.set(playerStateAtom);
// playerStore.set(currentSongAtom);
// playerStore.set(currentPlaylistAtom);
// playerStore.set(queueAtom);
// playerStore.set(playerAtom);

export default playerAtom;

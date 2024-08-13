import {atom, createStore} from "jotai";

export const playerStates = {
  INITIALIZED: -1,
  STOPPED: 0,
  LOADING: 1,
  LOADED: 2,
  PAUSED: 3,
  PLAYING: 4,
};

export const playerStateAtom = atom(playerStates.INITIALIZED);
export const currentSongAtom = atom({meta: {}});
export const currentPlaylistAtom = atom({id: ""});
export const queueAtom = atom([]);
export const playerVolumeAtom = atom();
export const playerFullViewAtom = atom(false);

export const currentPlayingAlbumArtColorsAtom = atom({});
export const currentPlayingAlbumArtImage = atom();

const playerAtom = atom({
  playerState: playerStateAtom,
  currentSong: currentSongAtom,
  currentPlaylist: currentPlaylistAtom,
  queue: queueAtom,
});

export const playerStore = createStore();

export default playerAtom;

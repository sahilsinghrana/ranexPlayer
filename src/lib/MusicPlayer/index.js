const hasMediaSession = () => {
  if ("mediaSession" in navigator) {
    return true;
  }
  return false;
};

const getMediaSession = () => {
  return navigator.mediaSession;
};

const setMediaSessionPlayback = (state) => {
  // states - "playing", "paused"
  if (!hasMediaSession()) return;

  getMediaSession().playbackState = state;
};

class MusicPlayer {
  constructor() {
    this.audioEl = new Audio();
    this.meta = {};
  }

  attachListener(eventName, callback) {
    this.audioEl.addEventListener(eventName, callback);
  }

  load(song, meta = {}) {
    this.audioEl.src = song;
    this.audioEl.load();
    this.meta = {
      ...this.meta,
      ...meta,
    };
  }

  loadAndPlay(songUrl, meta = {}) {
    this.load(songUrl);
    this.audioEl.play();
    this.meta = {
      ...this.meta,
      ...meta,
    };
  }

  play() {
    this.audioEl.play();
    setMediaSessionPlayback("playing");
  }

  pause() {
    this.audioEl.pause();
    setMediaSessionPlayback("paused");
  }

  seek = (newTime) => {
    this.audioEl.currentTime = newTime;
  };

  changeVolume(newVol = 0) {
    this.audioEl.volume = newVol;
  }
}

export default MusicPlayer;

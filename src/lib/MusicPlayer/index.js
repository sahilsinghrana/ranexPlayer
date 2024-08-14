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
  listenSongChange;
  queue = {
    id: "",
    name: "",
    queue: [],
    nowPlayingIdx: null,
  };

  constructor() {
    this.audioEl = new Audio();
    this.meta = {};
  }

  attachListener(eventName, callback) {
    if (eventName === "songchange") {
      this.listenSongChange = callback;
      return;
    }

    this.audioEl.addEventListener(eventName, callback);
  }

  setNowPlayingIndex(idx) {
    this.queue.nowPlayingIdx = idx;
  }

  getSongByQueueIdx(idx) {
    return this.queue.queue[idx] || {};
  }

  queueLength() {
    return this.queue.queue.length;
  }

  resetQueue(queueId, name = "Now Playing", queue = []) {
    this.queue = {
      queue,
      queueId,
      name,
    };
  }

  load(songs, meta = {}) {
    let song = songs;
    console.log(songs);
    if (Array.isArray(songs)) {
      if (!songs.length) return;
      song = songs[0].song;
      meta = songs[0].meta;
      this.resetQueue(123, "Now Playing", songs);
      this.setNowPlayingIndex(0);
    } else {
      this.resetQueue(123, "Now Playing", [songs]);
      this.setNowPlayingIndex(0);
    }

    this.loadSong(song, meta);
  }

  loadSong(songUrl, meta) {
    this.listenSongChange(songUrl, meta);
    this.meta = meta;
    this.audioEl.src = songUrl;
    this.audioEl.load();
  }

  loadAndPlay(songUrl, meta = {}) {
    this.loadSong(songUrl, meta);
    this.resetQueue();
    this.play();
  }

  play() {
    this.audioEl.play();
    setMediaSessionPlayback("playing");
  }

  pause() {
    this.audioEl.pause();
    setMediaSessionPlayback("paused");
  }

  next() {
    let newIdx = this.queue.nowPlayingIdx + 1;
    if (newIdx > this.queueLength() - 1) {
      newIdx = 0;
    }
    const {song, meta} = this.getSongByQueueIdx(newIdx);
    if (song) {
      this.setNowPlayingIndex(newIdx);
      this.loadAndPlay(song, meta);
    }
  }

  prev() {
    let newIdx = this.queue.nowPlayingIdx - 1;
    if (newIdx < 0) {
      newIdx = this.queueLength() - 1;
    }
    const {song, meta} = this.getSongByQueueIdx(newIdx);
    if (song) {
      this.setNowPlayingIndex(newIdx);
      this.loadAndPlay(song, meta);
    }
  }

  seek = (newTime) => {
    this.audioEl.currentTime = newTime;
  };

  changeVolume(newVol = 0) {
    this.audioEl.volume = newVol;
  }
}

export default MusicPlayer;

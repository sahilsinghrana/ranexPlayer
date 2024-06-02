class MusicPlayer {
  constructor() {
    this.audioEl = new Audio();
  }

  attachListener(eventName, callback) {
    this.audioEl.addEventListener(eventName, callback);
  }

  load(song) {
    this.audioEl.src = song;
    this.audioEl.load();
  }

  loadAndPlay(songUrl) {
    this.load(songUrl);
    this.audioEl.play();
  }

  play() {
    this.audioEl.play();
  }

  pause() {
    this.audioEl.pause();
  }
}

export default MusicPlayer;

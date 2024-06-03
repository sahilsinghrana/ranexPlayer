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
    setMediaSessionPlayback("playing");
  }

  pause() {
    this.audioEl.pause();
    setMediaSessionPlayback("paused");
  }

  seek(newTime) {
    this.audioEl.currentTime = newTime;
  }
}

export default MusicPlayer;

// const readTags = (file) => new Promise((resolve, reject) => {
//   const reader = new FileReader();

//   reader.onload = function (e) {
//     const dv = new DataView(this.result);

//     // "TAG" starts at byte -128 from EOF.
//     // See http://en.wikipedia.org/wiki/ID3
//     if (dv.getString(3, dv.byteLength - 128) == 'TAG') {
//       const title = dv.getString(30, dv.tell());
//       const artist = dv.getString(30, dv.tell());
//       const album = dv.getString(30, dv.tell());
//       const year = dv.getString(4, dv.tell());
//       console.log({
//         title,
//         artist,
//         album,
//         year
//       })
//       resolve({
//         title,
//         artist,
//         album,
//         year
//       })
//     } else {
//       // no ID3v1 data found.
//       console.log("No ID3 tag")
//       reject("No Id3 Tag")
//     }
//   };

//   reader.readAsArrayBuffer(file);
// })

// const audioNode = new AudioNode();
// const audioParams = new AudioParam();

// // audioNode.connect(audioParams.)

const eventList = [
  'canplay',
  'canplaythrough',
  'complete',
  'durationchange',
  'emptied',
  'ended',
  'loadeddata',
  'loadedmetadata',
  'loadstart',
  'pause',
  'play',
  'playing',
  'ratechange',
  'seeked',
  'seeking',
  'stalled',
  'suspend',
  'timeupdate',
  'waiting',
];

const attachEventListenersToAudio = (audioEl, playerIntance) => {
  /**
   * The browser can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.
   */
  //   audioEl.addEventListener('canplay', () => {
  //     console.log('CAn play');
  //   });

  eventList.forEach((eventName) => {
    audioEl.addEventListener(eventName, (ev) => {
      console.log(
        eventName,
        ev.target,
        audioEl[eventName],
        ev.target[eventName]
      );
      playerIntance.meta[eventName] = ev.target[eventName];
    });
  });
};

class Player {
  audioEl = document.createElement('audio');
  audioSrc = document.createElement('source');
  meta = {};

  constructor() {
    this.audioEl.appendChild(this.audioSrc);
    attachEventListenersToAudio(this.audioEl, this);
  }

  loadAndPlay(songUrl) {
    this.audioSrc.src = songUrl;
    this.audioEl.load();
    this.audioEl.play();
  }
}

const player = new Player();

export default player;

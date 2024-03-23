import Song from './Song';

import Queue from '../queue';

class AudioPlayer {
  queue = new Queue();

  // Id of the playing song
  currentSongId;
  currentSongIndex;

  constructor() {
    console.log('Audio Player initialized');
  }

  /**
   * --------Player Methods-----------
   */
  play() {}

  stop() {
    this.clearQueue();
  }

  next() {}

  prev() {}

  /**
   * ----------------- List methods ------------
   */

  /**
   *
   * @param {file} file
   * @param {object} metadata
   */
  addToQueue(file, metadata) {
    const song = new Song(file, metadata);
    this.queue.add(song);
  }

  removeFromQueue(id) {
    this.removeFromQueue(id);
  }

  reorderQueue() {}

  clearQueue() {
    this.queue.clear();
  }

  /**
   * Using singleton to make sure that there is only one instance of the player
   * @return {AudioPlayer}
   */
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    const audioPlayer = new AudioPlayer();
    return audioPlayer;
  }
}

export default AudioPlayer;

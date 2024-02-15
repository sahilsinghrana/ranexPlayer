import {ulid} from 'ulid';

class Song {
  constructor(file, metadata = {}) {
    this.song = {
      id: ulid(),
      file,
      ...metadata,
    };
  }

  get() {
    return this.song;
  }
}

export default Song;

import {ulid} from 'ulid';

const queues = {};

class Queue {
  queue = [];

  constructor() {
    this.queueId = ulid();
    queues[this.queueId] = {
      name: 'Queue Name',
      isUserPlaylist: false,
    };
  }

  add(item) {
    this.queue.push(item);
  }
  remove(id) {
    if (id) {
      this.queue = this.queue.filter((item) => item.id !== id);
    } else {
      this.queue.pop();
    }
  }

  clear() {
    this.queue = [];
  }

  reoreder() {}
}

export default Queue;

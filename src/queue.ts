export class Queue<T> {
  queue: Array<T>;
  length: number;
  constructor() {
    this.queue = [];
    this.length = 0;
  }

  enqueue(value: T) {
    this.queue.unshift(value);
    this.length++;
  }

  dequeue() {
    if (this.length > 0) {
      this.queue.pop();
      this.length--;
    }
  }

  peek() {
    const lastIndex = this.length - 1;
    if (lastIndex < 0) return false;
    return this.queue[lastIndex];
  }
}

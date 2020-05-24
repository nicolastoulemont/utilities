export class Queue<T> {
  queue: Array<T>;

  constructor() {
    this.queue = [];
  }

  enqueue(value: T) {
    this.queue.unshift(value);
  }

  dequeue() {
    if (this.queue.length <= 0) return null;
    return this.queue.pop();
  }

  peek() {
    const lastIndex = this.queue.length - 1;
    if (lastIndex < 0) return null;
    return this.queue[lastIndex];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  clear() {
    this.queue = [];
  }

  print() {
    if (this.isEmpty()) {
      console.log('Empty Queue');
    } else {
      this.queue.forEach((item, index) =>
        console.log(`${index} : ${JSON.stringify(item, undefined, 2)}`)
      );
    }
  }

  reverse(queue: Queue<T>): Queue<T> {
    if (queue.isEmpty()) return queue;
    const front = queue.peek();
    queue.dequeue();
    queue = this.reverse(queue);
    queue.enqueue(front as T);
    return queue;
  }
}

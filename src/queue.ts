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
    if (this.length <= 0) return null;
    this.length--;
    return this.queue.pop();
  }

  peek() {
    const lastIndex = this.length - 1;
    if (lastIndex < 0) return null;
    return this.queue[lastIndex];
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this.queue = [];
    this.length = 0;
  }

  print() {
    if (this.queue === []) {
      console.log('Empty Queue');
    } else {
      this.queue.forEach((item, index) => console.log(`${index} : ${item}`));
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

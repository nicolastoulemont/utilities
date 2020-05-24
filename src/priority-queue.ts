import { lowerBound } from './lowerbound';
interface BaseElement {
  priority: number;
}

export class PriorityQueue<Element extends BaseElement> {
  queue: Array<Element>;
  constructor() {
    this.queue = [];
  }

  enqueue(element: Element) {
    // Empty Queue or Queue last elem prio <= elem prio => insert item at the end of the array
    if (
      this.queue.length === 0 ||
      this.queue[this.queue.length - 1].priority <= element.priority
    ) {
      this.queue.push(element);
      return;
    }

    // Need to find the correct insertion index given the element priority
    const insertionIndex = lowerBound(
      this.queue,
      element,
      (a: Element, b: Element) => a.priority - b.priority
    );
    this.queue.splice(insertionIndex, 0, element);
  }

  dequeue() {
    const element = this.queue.pop();
    return element;
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

  reverse(queue: PriorityQueue<Element>): PriorityQueue<Element> {
    if (queue.isEmpty()) return queue;
    const front = queue.peek();
    queue.dequeue();
    queue = this.reverse(queue);
    this.queue.unshift(front as Element);
    return queue;
  }
}

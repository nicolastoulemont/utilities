import { PriorityQueue } from '../src';

interface Item {
  data: string;
  priority: number;
}

describe('Testing PriorityQueue', () => {
  it('Queue enqueue and peek', () => {
    const pq = new PriorityQueue<Item>();
    const item = { data: 'First', priority: 1 };
    pq.enqueue(item);
    expect(pq.peek()).toStrictEqual(item);
  });
  it('Queue dequeue', () => {
    const pq = new PriorityQueue<Item>();
    const firstItem = { data: 'One', priority: 1 };
    const secondItem = { data: 'Ten', priority: 10 };
    const thirdItem = { data: 'Four', priority: 4 };
    pq.enqueue(firstItem);
    pq.enqueue(secondItem);
    pq.enqueue(thirdItem);
    expect(pq.dequeue()).toStrictEqual(secondItem);
    expect(pq.peek()).toStrictEqual(thirdItem);
  });
  it('Queue is Empty', () => {
    const pq = new PriorityQueue<Item>();
    expect(pq.isEmpty()).toBe(true);
    pq.enqueue({ data: 'data', priority: 1 });
    expect(pq.isEmpty()).toBe(false);
  });
  it('Clear Queue', () => {
    const pq = new PriorityQueue<Item>();
    pq.enqueue({ data: 'data', priority: 1 });
    pq.enqueue({ data: 'data', priority: 2 });
    pq.enqueue({ data: 'data', priority: 3 });
    pq.clear();
    expect(pq.peek()).toBe(null);
  });
  it('Reverse Queue', () => {
    const pq = new PriorityQueue<Item>();
    pq.enqueue({ data: 'data', priority: 1 });
    pq.enqueue({ data: 'data', priority: 2 });
    pq.enqueue({ data: 'data', priority: 3 });
    expect(pq.peek()).toStrictEqual({ data: 'data', priority: 3 });
    pq.reverse(pq);
    expect(pq.peek()).toStrictEqual({ data: 'data', priority: 1 });
  });
});

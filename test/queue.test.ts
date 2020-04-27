import { Queue } from '../src';

describe('Testing Queue', () => {
  it('Queue enqueue and peek', () => {
    const queue = new Queue();
    const item = 'item';
    queue.enqueue(item);
    const lastItem = queue.peek();
    expect(lastItem).toStrictEqual(item);
  });
  it('Queue dequeue', () => {
    const queue = new Queue();
    const firstItem = 'firstItem';
    const secondItem = 'secondItem';
    queue.enqueue(firstItem);
    queue.enqueue(secondItem);
    queue.dequeue();
    const lastItem = queue.peek();
    expect(lastItem).toStrictEqual(secondItem);
  });
});

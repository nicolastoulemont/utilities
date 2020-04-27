import { Stack } from '../src';

describe('Testing Stack', () => {
  it('Stack push and peek', () => {
    const stack = new Stack();
    const item = 'item';
    stack.push(item);
    const lastItem = stack.peek();
    expect(lastItem).toStrictEqual(item);
  });
  it('Stack pop', () => {
    const stack = new Stack();
    const item = 'item';
    stack.push(item);
    const lastItem = stack.pop();
    expect(lastItem).toStrictEqual(item);
  });
});

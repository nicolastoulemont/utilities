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
    expect(stack.pop()).toStrictEqual(item);
  });
  it('Stack clear', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.clear();
    expect(stack.peek()).toBe(undefined);
  });
  it('Stack isEmpty', () => {
    const stack = new Stack();
    const isEmpty = stack.isEmpty();
    expect(isEmpty).toBe(true);
    stack.push('item');
    expect(stack.isEmpty()).toBe(false);
  });
  it('Insert at bottom', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.insertAtBottom(stack, 3);
    expect(stack.pop()).toBe(2);
  });
  it('Reverse stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.reverse(stack);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(3);
  });
  it('Sort stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(3);
    stack.push(2);
    stack.sort(stack);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });
});

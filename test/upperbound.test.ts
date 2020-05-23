import { upperBound } from '../src';

describe('Testing upperBound', () => {
  it('Testing', () => {
    const arr = [1, 2, 3, 5];
    const index = upperBound(arr, 3, (a: number, b: number) => a - b);
    expect(index).toBe(4);
  });
});

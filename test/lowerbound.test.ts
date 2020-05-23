import { lowerBound } from '../src';

describe('Testing lowerBound', () => {
  it('Testing', () => {
    const arr = [1, 2, 3, 5];
    const index = lowerBound(arr, 4, (a: number, b: number) => a - b);
    expect(index).toBe(3);
  });
});

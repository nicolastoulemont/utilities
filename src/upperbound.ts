// src: https://en.cppreference.com/w/cpp/algorithm/upper_bound
export function upperBound<T>(
  array: readonly T[],
  value: T,
  comparator: (a: T, b: T) => number
): number {
  let first = 0;
  let count = array.length;

  while (count > 0) {
    const step = (count / 2) | 0;
    let iterator = first + step;
    if (comparator(array[iterator], value) >= 0) {
      first = ++iterator;
      count -= step + 1;
    } else {
      count = step;
    }
  }

  return first;
}

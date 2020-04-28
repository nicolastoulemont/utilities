const recurse = <T>(acc: Array<T>, item: T): Array<T> =>
  Array.isArray(item) ? item.reduce(recurse, acc) : [...acc, item];

export function flatten<T>(array: Array<T>): Array<T> {
  return array.reduce((acc: Array<T>, item: T) => recurse(acc, item), []);
}

export function arrayToRecord<T extends { [key: string]: any }>(
  array: Array<T>,
  key: string
): Record<string, T> {
  return array.reduce((record: Record<string, T>, item: T) => {
    record[item[key]] = { ...item };
    return record;
  }, {});
}

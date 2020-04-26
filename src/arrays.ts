const recurse = (acc: Array<any>, item: any): Array<any> =>
  Array.isArray(item) ? item.reduce(recurse, acc) : [...acc, item];

export function flatten(array: Array<any>): Array<any> {
  return array.reduce(recurse, []);
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

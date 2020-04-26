const recurse = (acc: Array<any>, item: any): Array<any> =>
  Array.isArray(item) ? item.reduce(recurse, acc) : [...acc, item];

export function flatten(array: Array<any>): Array<any> {
  return array.reduce(recurse, []);
}

export function randomString() {
  return Math.random()
    .toString(36)
    .substring(7);
}

export function jlog(item: any, spacing: 2 | 4 | 6 = 2) {
  console.log(JSON.stringify(item, undefined, spacing));
}

export function sumUp(number: number) {
  return (number / 2) * (1 + number);
}

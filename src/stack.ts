export class Stack {
  storage: { [key: number]: any };
  length: number;
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(value: any) {
    this.storage[this.length] = value;
    this.length++;
  }

  pop() {
    const lastIndex = this.length - 1;
    if (lastIndex < 0) return false;
    const lastValue = this.storage[lastIndex];
    delete this.storage[lastIndex];
    this.length--;
    return lastValue;
  }

  peek() {
    const lastIndex = this.length - 1;
    return this.storage[lastIndex];
  }
}

export class Stack<T> {
  storage: { [key: number]: T };
  length: number;
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(value: T) {
    this.storage[this.length] = value;
    this.length++;
  }

  pop() {
    const lastIndex = this.length - 1;
    if (lastIndex < 0) return null;
    const lastValue = this.storage[lastIndex];
    delete this.storage[lastIndex];
    this.length--;
    return lastValue;
  }

  peek() {
    const lastIndex = this.length - 1;
    return this.storage[lastIndex];
  }

  clear() {
    if (this.storage === {}) return;
    for (const key in this.storage) {
      delete this.storage[key];
      this.length--;
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    if (this.storage === {}) {
      console.log('Empty stack');
    } else {
      for (const key in this.storage) {
        console.log(`${key} : ${this.storage[key]}`);
      }
    }
  }

  insertAtBottom(stack: Stack<T>, item: T) {
    if (stack.isEmpty()) {
      stack.push(item);
    } else {
      const temp = stack.pop();
      this.insertAtBottom(stack, item);
      stack.push(temp as T);
    }
  }

  reverse(stack: Stack<T>) {
    if (!stack.isEmpty()) {
      const temp = stack.pop();
      this.reverse(stack);
      this.insertAtBottom(stack, temp as T);
    }
  }

  sort(stack: Stack<T>) {
    if (!stack.isEmpty()) {
      const temp = stack.pop();
      this.sort(stack);
      this.sortedInsert(stack, temp as T);
    }
  }

  sortedInsert(stack: Stack<T>, item: T) {
    if (stack.isEmpty() || item > stack.peek()) {
      stack.push(item);
    } else {
      const temp = stack.pop();
      this.sortedInsert(stack, item);
      stack.push(temp as T);
    }
  }
}

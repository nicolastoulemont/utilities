class Node {
  data: any;
  next: Node | null | undefined;
  constructor(data: any, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  head: null | undefined | Node;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(data: any) {
    const node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  removeAt(index: number) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current?.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current?.next;
      }
      if (previous) {
        previous.next = current?.next;
      }
    }
    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }
}

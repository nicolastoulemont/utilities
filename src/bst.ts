class Node<T> {
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;
  constructor(value: T, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export class BST<T> {
  root: Node<T> | null;
  constructor() {
    this.root = null;
  }

  searchTree(node: Node<T>, value: T): void | null {
    // Iterate left
    if (value < node.value) {
      if (node.left === null) {
        node.left = new Node(value);
        return;
      }
      return this.searchTree(node.left, value);
    } else if (value > node.value) {
      // Iterate Right
      if (node.right === null) {
        node.right = new Node(value);
        return;
      }
      return this.searchTree(node.right, value);
    } else {
      return null;
    }
  }

  add(value: T) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }
    return this.searchTree(this.root as Node<T>, value);
  }

  getMin() {
    let current = this.root;
    while (current?.left !== null) {
      current = current!.left;
    }
    return current.value;
  }
  getMax() {
    let current = this.root;
    while (current?.right !== null) {
      current = current!.right;
    }
    return current.value;
  }

  find(value: T) {
    let current = this.root;
    while (current) {
      if (value === current.value) return current;
      current = value < current.value ? current.left : current.right;
    }
    return null;
  }

  contains(value: T) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  remove(value: T) {
    if (!this.root) {
      return 'Tree is empty';
    } else {
      return this.searchAndRemove(this.root, value);
    }
  }

  findMin(root: Node<T>): Node<T> {
    return !root.left ? root : this.findMin(root.left);
  }

  findMax(root: Node<T>): Node<T> {
    return !root.right ? root : this.findMax(root.right);
  }

  searchAndRemove(node: Node<T> | null, value: T) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.searchAndRemove(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.searchAndRemove(node.right, value);
      return node;
    } else {
      // value === node.value
      // No children
      if (!node.left && !node.right) {
        node = null;
        return node;
      }
      // No left children
      if (!node.left) {
        node = node.right;
        return node;
      }
      // No right children
      if (!node.right) {
        node = node.left;
        return node;
      }
      // Node has two children
      if (node.right) {
        // Find min node on the right
        let minNode = this.findMin(node.right);
        // Replace node value with min node value
        node.value = minNode.value;
        // Remove the min node
        node.right = this.searchAndRemove(node.right, minNode.value);
      }

      return node;
    }
  }
}

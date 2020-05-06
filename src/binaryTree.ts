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

export class BinaryTree<T> {
  root: Node<T> | null;
  constructor() {
    this.root = null;
  }

  add(value: T) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    let current = this.root;

    while (true) {
      if (current.value > value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          return;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          return;
        }
      }
    }
  }

  remove(value: T) {
    if (!this.root) {
      return 'Tree is empty!';
    } else {
      return this.recurse(this.root, value);
    }
  }

  recurse(root: Node<T> | null, value: T) {
    if (!root) {
      return null;
    }

    if (value < root.value) {
      root.left = this.recurse(root.left, value);
      return root;
    } else if (value > root.value) {
      root.right = this.recurse(root.right, value);
      return root;
    } else {
      if (!root.left && !root.right) {
        root = null;
        return root;
      }

      if (root.left && !root.right) {
        root = root.left;
        return root;
      } else if (root.right && !root.left) {
        root = root.right;
        return root;
      }

      if (root.right) {
        let minRight = this.findMinNode(root.right);
        root.value = minRight.value;
        root.right = this.recurse(root.right, minRight.value);
      }

      return root;
    }
  }

  findMinNode(root: Node<T>): Node<T> {
    if (!root.left) {
      return root;
    } else {
      return this.findMinNode(root.left);
    }
  }

  contains(value: T) {
    let current = this.root;

    while (current) {
      if (value === current.value) {
        return true;
      }
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }
}

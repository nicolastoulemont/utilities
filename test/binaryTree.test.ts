import { BinaryTree } from '../src';

describe('Testing BinaryTree utils', () => {
  it('add', () => {
    const myBinaryTree = new BinaryTree<number>();
    myBinaryTree.add(2);
    myBinaryTree.add(5);
    myBinaryTree.add(3);
  });
  it('contains', () => {
    const myBinaryTree = new BinaryTree<number>();
    myBinaryTree.add(2);
    myBinaryTree.add(5);
    myBinaryTree.add(3);
    const contains = myBinaryTree.contains(3);
    expect(contains).toBe(true);
  });
  it('remove', () => {
    const myBinaryTree = new BinaryTree<number>();
    myBinaryTree.add(2);
    myBinaryTree.add(5);
    myBinaryTree.add(3);
    myBinaryTree.remove(5);
    const val = myBinaryTree.contains(5);
    expect(val).toBe(false);
  });
});

import { BST } from '../src';

describe('Testing BinaryTree utils', () => {
  it('add', () => {
    const bst = new BST<number>();
    bst.add(2);
    bst.add(5);
    bst.add(3);
  });
  it('contains', () => {
    const bst = new BST<number>();
    bst.add(2);
    bst.add(5);
    bst.add(3);
    expect(bst.contains(3)).toBe(true);
  });
  it('Find', () => {
    const bst = new BST<number>();
    bst.add(3);
    expect(bst.find(4)).toBe(null);
    expect(bst.find(3)).not.toBe(null);
  });
  it('Get min', () => {
    const bst = new BST<number>();
    bst.add(2);
    bst.add(5);
    expect(bst.getMin()).toBe(2);
  });
  it('Get max', () => {
    const bst = new BST<number>();
    bst.add(2);
    bst.add(5);
    expect(bst.getMax()).toBe(5);
  });
  it('remove', () => {
    const bst = new BST<number>();
    bst.add(2);
    bst.add(1);
    bst.add(5);
    bst.add(3);
    bst.remove(5);
    expect(bst.contains(5)).toBe(false);
  });
});

import { LinkedList } from '../src';

describe('Testing LinkedList', () => {
  it('List insert', () => {
    const list = new LinkedList();
    const itemOne = 'itemOne';
    const itemTwo = 'itemTwo';
    list.insert(itemOne);
    list.insert(itemTwo);
    expect(list.size).toBe(2);
  });
  it('List removeAt', () => {
    const list = new LinkedList();
    const itemOne = 'itemOne';
    const itemTwo = 'itemTwo';
    list.insert(itemOne);
    list.insert(itemTwo);
    list.removeAt(1);
    expect(list.size).toBe(1);
  });

  it('List clearList', () => {
    const list = new LinkedList();
    const itemOne = 'itemOne';
    const itemTwo = 'itemTwo';
    list.insert(itemOne);
    list.insert(itemTwo);
    list.clearList();
    expect(list.size).toBe(0);
  });
});

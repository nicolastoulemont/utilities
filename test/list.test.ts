import { LinkedList } from '../src';

describe('Testing LinkedList', () => {
  it('List insert and get', () => {
    const list = new LinkedList();
    const itemOne = 'itemOne';
    list.insertFirst(itemOne);
    const first = list.getAt(0);
    expect(first === itemOne);
  });
  it('List insertFirst', () => {
    const list = new LinkedList();
    const itemOne = 'itemOne';
    const itemTwo = 'itemTwo';
    list.insertFirst(itemOne);
    list.insertFirst(itemTwo);
    const firstItem = list.getAt(0);
    expect(list.size).toBe(2);
    expect(firstItem === itemTwo);
  });
  it('List insertAt', () => {
    const list = new LinkedList();
    const itemOne = 'itemOne';
    const itemTwo = 'itemTwo';
    const itemThree = 'itemThree';
    list.insertFirst(itemOne);
    list.insertLast(itemTwo);
    list.insertAt(itemThree, 1);
    const item = list.getAt(1);
    expect(list.size).toBe(3);
    expect(item === itemThree);
  });
  it('List insertLast', () => {
    const list = new LinkedList();
    const itemOne = 'itemOne';
    const itemTwo = 'itemTwo';
    list.insertFirst(itemOne);
    list.insertLast(itemTwo);
    const firstItem = list.getAt(0);
    expect(list.size).toBe(2);
    expect(firstItem === itemOne);
  });
  it('List removeAt', () => {
    const list = new LinkedList();
    const itemOne = 'itemOne';
    const itemTwo = 'itemTwo';
    list.insertFirst(itemOne);
    list.insertFirst(itemTwo);
    list.removeAt(1);
    const item = list.getAt(0);
    expect(list.size).toBe(1);
    expect(item === itemTwo);
  });
  it('List clearList', () => {
    const list = new LinkedList();
    const itemOne = 'itemOne';
    const itemTwo = 'itemTwo';
    list.insertFirst(itemOne);
    list.insertFirst(itemTwo);
    list.clearList();
    expect(list.size).toBe(0);
  });
  it('List getListAsArray', () => {
    const list = new LinkedList();
    const itemOne = 'itemOne';
    const itemTwo = 'itemTwo';
    list.insertFirst(itemOne);
    list.insertFirst(itemTwo);
    const arr = list.getListAsArray();
    expect(arr === ['itemTwo', 'itemOne']);
  });
});

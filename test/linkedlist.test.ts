import { LinkedList } from '../src';

describe('Testing LinkedList', () => {
  it('List insert and get', () => {
    const list = new LinkedList();
    const itemOne = 'itemOne';
    list.insertFirst(itemOne);
    const first = list.getAt(0);
    // @ts-ignore
    expect(first.data).toStrictEqual(itemOne);
  });
  it('List insertFirst', () => {
    const list = new LinkedList();
    const itemOne = 'itemOne';
    const itemTwo = 'itemTwo';
    list.insertFirst(itemOne);
    list.insertFirst(itemTwo);
    const firstItem = list.getAt(0);
    expect(list.size).toBe(2);
    // @ts-ignore
    expect(firstItem.data).toStrictEqual(itemTwo);
  });
  it('List insertAt', () => {
    const list = new LinkedList();
    const itemOne = 'itemOne';
    const itemTwo = 'itemTwo';
    list.insertAt(itemOne, 0);
    list.insertAt(itemTwo, 1);
    const item = list.getAt(1);
    expect(list.size).toBe(2);
    // @ts-ignore
    expect(item.data).toStrictEqual(itemTwo);
  });
  it('List insertLast', () => {
    const list = new LinkedList();
    const itemOne = 'itemOne';
    const itemTwo = 'itemTwo';
    list.insertFirst(itemOne);
    list.insertLast(itemTwo);
    const firstItem = list.getAt(0);
    expect(list.size).toBe(2);
    // @ts-ignore
    expect(firstItem.data).toStrictEqual(itemOne);
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
    // @ts-ignore
    expect(item.data).toStrictEqual(itemTwo);
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
    // @ts-ignore
    expect(arr).toStrictEqual(['itemTwo', 'itemOne']);
  });
});

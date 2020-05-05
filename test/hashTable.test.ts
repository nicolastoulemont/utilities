import { HashTable } from '../src';

describe('Testing HashTable utils', () => {
  it('Insert', () => {
    const myHashTable = new HashTable<number>(5);
    myHashTable.insert('Nicolas', 1);
    myHashTable.insert('Flora', 2);
  });
  it('Get', () => {
    const myHashTable = new HashTable<number>(5);
    myHashTable.insert('Nicolas', 1);
    myHashTable.insert('Flora', 2);
    const val = myHashTable.get('Nicolas');
    const valTwo = myHashTable.get('Flora');
    expect(val).toStrictEqual(1);
    expect(valTwo).toStrictEqual(2);
  });
  it('Remove', () => {
    const myHashTable = new HashTable<number>(5);
    myHashTable.insert('Nicolas', 1);
    myHashTable.remove('Nicolas');
    const val = myHashTable.get('Nicolas');
    expect(val).toBe(null);
  });
});

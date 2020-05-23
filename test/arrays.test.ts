import { flatten, arrayToRecord, arrayToLinkedList } from '../src';

describe('Testing array utils', () => {
  it('Flatten', () => {
    const deepArr = ['string_one', ['string_two', [1]]];
    const flat = flatten(deepArr);
    expect(flat).toStrictEqual(['string_one', 'string_two', 1]);
  });

  it('Array to record', () => {
    const array = [
      {
        name: 'name_one',
        field: 'field_one',
      },
      {
        name: 'name_two',
        field: 'field_two',
      },
    ];
    const record = arrayToRecord(array, 'name');
    const expectedRecord = {
      name_one: {
        name: 'name_one',
        field: 'field_one',
      },
      name_two: {
        name: 'name_two',
        field: 'field_two',
      },
    };
    expect(record).toStrictEqual(expectedRecord);
  });
  it('Array to linked list', () => {
    const array = [
      {
        name: 'name_one',
        field: 'field_one',
      },
      {
        name: 'name_two',
        field: 'field_two',
      },
    ];
    const linkedList = arrayToLinkedList(array);
    expect(linkedList.size).toBe(2);
    // @ts-ignore
    expect(linkedList.getAt(1).data).toStrictEqual({
      name: 'name_two',
      field: 'field_two',
    });
  });
});

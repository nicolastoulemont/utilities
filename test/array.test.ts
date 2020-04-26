import { flatten } from '../src';

describe('Testing array utils', () => {
  it('Flatten', () => {
    const deepArr = ['string_one', ['string_two', 'string_three']];
    const flat = flatten(deepArr);
    expect(flat).toStrictEqual(['string_one', 'string_two', 'string_three']);
  });
});

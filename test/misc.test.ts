import { randomString } from '../src';

describe('Testing misc', () => {
  it('Random string', () => {
    const random = randomString();
    const valid = typeof random === 'string';
    expect(valid).toBe(true);
  });
});

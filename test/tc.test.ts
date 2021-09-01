import { isError, tc } from '../src';

describe('tc', () => {
  describe('synchronous function', () => {
    it('returns the error thrown in a block', () => {
      const [, error] = tc(() => {
        throw new Error('dummy');
        return 'result';
      });

      expect(error instanceof Error);
    });

    it('returns the value if nothing is thrown in a block', () => {
      const [result] = tc(() => 42);

      expect(result).toStrictEqual(42);
    });
  });

  describe('async functions', () => {
    it('returns the error thrown in a block', async () => {
      const [, error] = await tc(() =>
        Promise.reject<number>(new Error('dummy'))
      );

      expect(error instanceof Error);
    });

    it('returns the value if nothing is thrown in a block', async () => {
      const [result] = await tc(() => Promise.resolve(42));

      expect(result).toStrictEqual(42);
    });
  });

  describe('promises', () => {
    it('returns the value resolved by a promise', async () => {
      const [result] = await tc(Promise.resolve(42));

      expect(result).toStrictEqual(42);
    });

    it('returns the reason why a promise has been rejected', async () => {
      const [, error] = await tc(Promise.reject<number>(new Error('dummy')));

      expect(error instanceof Error);
    });
  });
});

describe('isError()', () => {
  it('returns true for errors', () => {
    expect(isError(new Error('dummy')));
  });

  it("returns false for something that's not an error", () => {
    expect(!isError({}));
  });
});

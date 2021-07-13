import { isError, tryFn } from '../src';

describe('tryFn', () => {
  describe('synchronous function', () => {
    it('returns the error thrown in a block', () => {
      const result = tryFn(() => {
        throw new Error('dummy');
      });

      expect(result instanceof Error);
    });

    it('returns the value if nothing is thrown in a block', () => {
      const result = tryFn(() => 42);

      expect(result).toStrictEqual(42);
    });
  });

  describe('async functions', () => {
    it('returns the error thrown in a block', async () => {
      const result = await tryFn(() =>
        Promise.reject<number>(new Error('dummy'))
      );

      expect(result instanceof Error);
    });

    it('returns the value if nothing is thrown in a block', async () => {
      const result = await tryFn(() => Promise.resolve(42));

      expect(result).toStrictEqual(42);
    });
  });

  describe('promises', () => {
    it('returns the value resolved by a promise', async () => {
      const result = await tryFn(Promise.resolve(42));

      expect(result).toStrictEqual(42);
    });

    it('returns the reason why a promise has been rejected', async () => {
      const result = await tryFn(Promise.reject<number>(new Error('dummy')));

      expect(result instanceof Error);
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

// Taken from ts-try https://github.com/elmarx/ts-try

/**
 * helper to test if an object is a Promise.
 *
 * Taken from https://github.com/ssnau/xkit/blob/master/util/is-promise.js,
 * as suggested by https://stackoverflow.com/questions/27746304/how-do-i-tell-if-an-object-is-a-promise
 * as is plausible considering https://promisesaplus.com/#point-53
 */
function isPromiseLike(obj: unknown): obj is PromiseLike<unknown> {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof (obj as any).then === 'function'
  );
}

/**
 * Union type to wrap the original type T and allow Errors additionally
 */
export type Try<T, E extends Error = Error> = [T, null] | [null, E];

/**
 * simple function to turn a promise of type T to type [T, null] | [null,Error]
 *
 * i.e.: catch the error and return it as [null,err]
 */
function tryify<T, E extends Error = Error>(
  p: PromiseLike<T>
): PromiseLike<Try<T, E>> {
  return p.then(
    (x: T) => [x, null],
    (err: E) => [null, err]
  );
}

/**
 * tc wraps code that throws, and returns an with the result and the error thrown
 */
export function tc<T, E extends Error = Error>(
  asyncBlock: () => PromiseLike<T>
): PromiseLike<Try<T, E>>;
export function tc<T, E extends Error = Error>(block: () => T): Try<T, E>;
export function tc<T, E extends Error = Error>(
  promise: PromiseLike<T>
): PromiseLike<Try<T, E>>;
export function tc<T, E extends Error = Error>(
  input: PromiseLike<T> | (() => T | PromiseLike<T>)
): Try<T, E> | PromiseLike<Try<T, E>> {
  // if the input is a simple promise, a simple try-ify is enough
  if (isPromiseLike(input)) {
    return tryify(input);
  }

  // ok, the input is a (sync or async) function, we need to execute it
  try {
    const v = input();

    // if block is an async function, try-ify the returned promise
    if (isPromiseLike(v)) {
      return tryify<T, E>(v);
    }

    // if block is sync, the result is in v, so just return
    return [v, null];
  } catch (err) {
    // execution of block threw (and it's obviously sync), so return the error
    return [null, err as E];
  }
}

export function isError(e: unknown): e is Error {
  return e instanceof Error;
}

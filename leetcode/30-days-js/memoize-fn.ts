type FnMem = (...params: number[]) => number;

function memoize(fn: FnMem): FnMem {
  const cache = new Map<string, number>();
  return function (...args) {
    const cacheKey = JSON.stringify([...args]);
    if (!cache.has(cacheKey)) {
      cache.set(cacheKey, fn(...args));
    }
    return cache.get(cacheKey)!;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

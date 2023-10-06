type JSONValueOnce =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValueOnce };
type OnceFn = (...args: JSONValueOnce[]) => JSONValueOnce | undefined;

function once(fn: Function): OnceFn {
  let timesRan = 0;
  return function (...args) {
    if (timesRan === 0) {
      timesRan++;
      return fn(...args);
    }
    return undefined;
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

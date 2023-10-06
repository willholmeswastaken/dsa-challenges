type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  const int1 = await promise1;
  const int2 = await promise2;
  return int1 + int2;
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

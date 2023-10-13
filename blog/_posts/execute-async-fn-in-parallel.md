---
title: "2721 - Execute Asynchronous Functions in Parallel"
excerpt: "This problem teaches how to execute a bunch of functions in parallel without relying on promise.all or promise.allsettled. Like writing our own."
date: "2023-10-13T20:33:20.168Z"
author:
  name: Will Holmes
  picture: "https://willholmes.dev/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F13040458&w=128&q=75"
---

## The problem statement

Given an array of asynchronous functions `functions`, return a new promise `promise`. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

`promise` resolves:

When all the promises returned from `functions` were resolved successfully in parallel. The resolved value of `promise` should be an array of all the resolved values of promises in the same order as they were in the `functions`. The `promise` should resolve when all the asynchronous functions in the array have completed execution in parallel.

`promise` rejects:

When any of the promises returned from `functions` were rejected. `promise` should also reject with the reason of the first rejection.

Please solve it without using the built-in `Promise.all` function.

### Understanding the problem

They are essentially asking us to return a promise function that loops through the array of functions and call them with the .then .catch promise based accessors. Push the results into an ordered array and return them once the last fn has executed. However, if we run into an error with the function which will hit our catch block. We should reject our new promise with the error.

### Examples

**Example 1:**

**Input**:
functions = [
() => new Promise(resolve => setTimeout(() => resolve(5), 200))
]

**Output**: {"t": 200, "resolved": [5]}

**Explanation**:

promiseAll(functions).then(console.log); // [5]

The single function was resolved at 200ms with a value of 5.

**Example 2:**

**Input**: functions = [
() => new Promise(resolve => setTimeout(() => resolve(1), 200)),
() => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]

**Output**: {"t": 100, "rejected": "Error"}

**Explanation**: Since one of the promises rejected, the returned promise also rejected with the same error at the same time.

**Example 3:**

**Input**: functions = [
() => new Promise(resolve => setTimeout(() => resolve(4), 50)),
() => new Promise(resolve => setTimeout(() => resolve(10), 150)),
() => new Promise(resolve => setTimeout(() => resolve(16), 100))
]

**Output**: {"t": 150, "resolved": [4, 10, 16]}

**Explanation**: All the promises resolved with a value. The returned promise resolved when the last promise resolved.

### Code

```ts
type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise<T[]>((res, rej) => {
    // Create an array with the length of our functions array.
    // So we can update the results at the correct index as they come in.
    const outputs: T[] = new Array<T>(functions.length);
    // countdown for remaining functions to execute. As they will run asynchronously we need a counter to maintain our 'state'.
    let remainingFns = functions.length;
    for (let i = 0; i < functions.length; i++) {
      // execute func
      functions[i]()
        .then((val) => {
          // set the index value for our ordered array to the result.
          outputs[i] = val;
          // decrement the amount of remaining funcs.
          remainingFns--;

          // as this is ran in an async manner we need to check if this is our last func.
          if (remainingFns === 0) return res(outputs);
        })
        // return a rejection upon failure
        .catch(rej);
    }
  });
}
```

## Key Takeaways

1. I focused way too much on the parallel element to this problem. If I had just focused on solving the problem first. I might have discovered how it comes with just running a promise in a for loop.
2. Write code thoughts -> write code -> try to make it better / right -> look at solutions. This code flow should always be followed when solving questions.

---
title: "2677 - Chunk Array"
excerpt: "This problem asks us to break an array down into smaller array by a certain size parameter."
date: "2023-10-18T18:28:32.960Z"
author:
  name: Will Holmes
  picture: "https://willholmes.dev/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F13040458&w=128&q=75"
---

## The problem statement

Given an array `arr` and a chunk size `size`, return a chunked array. A chunked array contains the original elements in `arr`, but consists of subarrays each of length `size`. The length of the last subarray may be less than size if `arr.length` is not evenly divisible by `size`.

You may assume the array is the output of `JSON.parse`. In other words, it is valid JSON.

Please solve it without using lodash's `_.chunk` function.

### Understanding the problem

What the question is asking of us is the following:

Assuming valid inputs, please return a `2D array` that contains the passed in array elments but with a maximum size on each inner array of `size`.

### Code

My initial attempt

```ts
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  // split the array into an array of mini arrays, max size of x
  const result: Array<Obj[]> = [];
  for (const i of arr) {
    if (result.some((x) => x.length < size)) {
      result.find((x) => x.length < size).push(i);
    } else {
      result.push([i]);
    }
  }
  return result;
}
```

The most efficient attempt (using js arr prototype)

```ts
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  const result: Array<Obj[]> = [];
  while (arr.length > 0) {
    // the splice func allows us to remove elements from an array and that array will be updated. So here we remove at index 0, size amounts each time this while loop iterates.
    result.push(arr.splice(0, size));
  }
  return result;
}
```

## Code Explanation

The first one worked first time round. We just loop the array arr and check if any sub-array within result has a size less than size. If it does we append our value to it. Else we just create a new sub-array with our looped element and add it. Pretty simple. But it's not great from a performance point of view.

The second one works even better. We don't need to scan the 2d result array 2 times per loop iteration. Also we are not looping every single array item. We are just looping chunks of the array at size each time. Resulting in quicker speeds and lower memory usage.

## Key takeaways

1. Splice is a useful prototype to remember. You can add/update/delete elements into an array with splice.
2. Think wider than just for loops when it comes to array problems. Can we utilise a different loop like a while one?
3.

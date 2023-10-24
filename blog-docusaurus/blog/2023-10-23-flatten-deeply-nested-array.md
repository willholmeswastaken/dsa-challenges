---
slug: 2625-flatten-deeply-nested-array
title: "2625 - Flatten deeply nested array"
description: "This problem asks us to return a flattend array of x possible sub-arrays within the input array, but only for a specified n depth."
authors: will
---

## The problem statement

Given a multi-dimensional array `arr` and a depth `n`, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than `n`. The depth of the elements in the first array are considered to be `0`.

Please solve it without the built-in `Array.flat` method.

### Understanding the problem

This problem is basically asking us to do a depth-first search of the 2d input array. It wants us to recursively traverse through the array, spreading the results of inner arrays until we get to a certain depth.

We will need to make sure that the solution we choose, keeps a pointer to the current depth.

### Code

```ts
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = (arr: MultiDimensionalArray, n: number) => {
  // if n is 0, the instructions tell us to just return it as is.
  // But also, if we hit a depth of 0 whilst recursively traversing,
  // we want to make sure that we just return it as is.
  if (n === 0) return arr;

  const res: MultiDimensionalArray = [];
  for (const item of arr) {
    // If it's an array, we want to recursively call flat but
    // updating n to reflect our depth relative position.
    if (Array.isArray(item)) {
      res.push(...flat(item, n - 1));
    } else {
      // if its not an array we just want to add the number to the resulting array.
      res.push(item);
    }
  }
  return res;
};
```

## Code Explanation

The approach:

1. Add our n = 0 case to just return arr;
2. Loop through the current array.
   1. When we find an item that is a number, push that number to our resulting array.
   2. When we find an array, recursively call flat and spread the results into our resulting array. It wont affect nested arrays if we build up any during our recursive calls that exceed the n depth. This is because the spread operator is just spreading the parts which aren't out of our n bounds.
3. Return the resulting array.

## Key takeaways

1. Array.isArray is a useful helper method!
2. Recursion recursion recursion!

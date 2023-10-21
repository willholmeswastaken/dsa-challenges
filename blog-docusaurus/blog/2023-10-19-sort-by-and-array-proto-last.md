---
slug: 2724-2619-sort-by-and-array-prototype-last
title: "2724 & 2619 - Sort By & Array.prototype.last"
description: "These are two easy problems from the js 30 day challenge"
authors: will
---

## The problem statement

#### Sort By

Given an array `arr` and a function `fn`, return a sorted array `sortedArr`. You can assume `fn` only returns numbers and those numbers determine the sort order of `sortedArr`. `sortedArray` must be sorted in ascending order by `fn` output.

You may assume that `fn` will never duplicate numbers for a given array.

#### Array prototype last

Write code that enhances all arrays such that you can call the `array.last()` method on any array and it will return the last element. If there are no elements in the array, it should return `-1`.

You may assume the array is the output of `JSON.parse`.

### Understanding the problem

#### Sort By

Please return us a sorted array based upon the values generated via the fn() param, they will never return a duplicate number.

#### Array prototype last

The question is asking us within the `this` scope of the array, please return us the last element or -1 if there are no elements.

### Code

#### Array prototype last

```ts
Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};
```

#### Sort By

```ts
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number;

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  return arr.sort((a, b) => fn(a) - fn(b));
}
```

## Key takeaways

1. Prototype functions hold the thing its extending within the this scope.
2. The js sort prototype has a complexity of O(log n).

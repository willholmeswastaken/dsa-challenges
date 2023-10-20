---
title: "2722 - Join Two Arrays by Id"
excerpt: "This problem gives us two arrays of a common type, asks us to join them together by their id property."
date: "2023-10-20T15:53:01.260Z"
author:
  name: Will Holmes
  picture: "https://willholmes.dev/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F13040458&w=128&q=75"
---

## The problem statement

Given two arrays `arr1` and `arr2`, return a new array `joinedArray`. All the objects in each of the two inputs arrays will contain an `id` field that has an integer value. `joinedArray` is an array formed by merging `arr1` and `arr2` based on their `id` key. The length of `joinedArray` should be the length of unique values of `id`. The returned array should be sorted in ascending order based on the `id` key.

If a given `id` exists in one array but not the other, the single object with that `id` should be included in the result array without modification.

If two objects share an `id`, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from `arr2` should override the value from `arr1`.

### Understanding the problem

This problem intends to really throw us off from the start. It gives us a JSONValue type which is just not fit for purpose to solve this problem.

The key takeaways from the problem statement are:

1. From the examples we can derive that the ids are in numerical order across `arr1` and `arr2`.
2. If the id is in **both** arr1 and arr2, choose the value from arr2.
3. If the id is only in arr1 / arr2, just set that value.

Quite simple, but the instructions make it sound so much more complex and the example type is designed to throw you off.

### Code

```ts
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

function join<T extends { id: number }>(arr1: T[], arr2: T[]): T[] {
  const res = {};
  for (const item of arr1) {
    res[item.id] = item;
  }
  for (const item of arr2) {
    if (res[item.id]) {
      res[item.id] = Object.assign(res[item.id], item);
    } else {
      res[item.id] = item;
    }
  }
  return Object.values(res);
}
```

## Code Explanation

The approach:

1. Create a hashmap / object to store each id and its corresponding item.
2. Loop `arr1` and store all items into this map.
3. Loop `arr2`
   1. If the `item` exists in our map, replace it.
   2. If the `item` doesnt exist, set it.
4. Return the hashmap's values as an array.

We can assume that the arrays are already sorted given the examples provided.

## Key takeaways

1. Remember to use `of` to iterate object values. Use in to iterate object keys. Arrays are objects.
2. Read examples and understand any information they may leak.
3. Make it work -> make it better.
4. Object.assign is useful for blending two items of the same type. First param is target, second is source. Source will override target.

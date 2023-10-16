---
title: "2727 - Is Object Empty"
excerpt: "This problem asks us to tell the computer whether an object is empty or not. The caveat is that the object could be a js object or an array."
date: "2023-10-16T11:19:25.650Z"
author:
  name: Will Holmes
  picture: "https://willholmes.dev/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F13040458&w=128&q=75"
---

## The problem statement

Given an object or an array, return if it is empty.

- An empty object contains no key-value pairs.
- An empty array contains no elements.

You may assume the object or array is the output of `JSON.parse`.

### Understanding the problem

The problem seems easy at a glance, but understand whats being asked.

"Please tell us if an object or array is empty"

Fundamentally, arrays in javascript are objects.

Given that, it should highlight the path to take.

### Code

```ts
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

// O(n) - we create an array from iterating each item.
function isEmpty(obj: Obj): boolean {
  return Object.keys(obj).length === 0;
}

// O(1) - a for loop can run max once never increases in iteration time
function isEmpty(obj: Obj): boolean {
  for (const _ in obj) {
    return false;
  }
  return true;
}
```

## Code Explanation

**O(1)**

When using a `for ... in ...` we are iterating over the keys of an object. Given that an array is a js object under the hood this allows us to iterate through each key in the array. But when we find one, via a successful iteration we will return false as we know we have an entry.

**O(n)**

When using the **Object.keys** func we build up an array of keys from all values in the array. Then we just return the length of that new array.

## Key takeaways

1. Arrays are objects in js, useful to know.
2. The in keyword allows us to iterate an objects keys. Useful in certain scenarios. The of keyword in for loops allows us to iterate an objects values.

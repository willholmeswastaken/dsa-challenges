---
slug: 2705-compact-object
title: "2705 - Compact Object"
description: "This problem asks us to compact a multi-dimensional object down to only the values that are truthy."
authors: will
---

## The problem statement

Given an object or array `obj`, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when `Boolean(value)` returns `false`.

You may assume the `obj` is the output of `JSON.parse`. In other words, it is valid JSON.

### Examples:

**Example 1:**

Input: obj = [null, 0, false, 1]

Output: [1]

Explanation: All falsy values have been removed from the array.

**Example 2:**

Input: obj = {"a": null, "b": [false, 1]}

Output: {"b": [1]}

Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

**Example 3:**

Input: obj = [null, 0, 5, [0], [false, 16]]

Output: [5, [], [16]]

Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

### Understanding the problem

This problem is asking us to filter out any values within a multi-dimensional array / object that evaluate to false. A few things to note:

1. An array with values equals true in a `Boolean()` consumption.
2. 0 evaluates to false along with null, undefined etc.

Recursion is going to be the method of choice here to solve this particular problem.

We know from the type provided that the input to the func will be an array or an object. So we can safely assume that we can recursively call this func with any value that we might need.

We will need to differentiate between whether the input is an array or an object as there will be a different process of returning either of them. I.e. array.push vs obj[key] = val.

### Code

```ts
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
  // If the incoming obj is an array, only return those where Boolean is true
  // A sub-array is true.
  // Else just set data is the key-value object.
  const data = Array.isArray(obj) ? obj.filter(Boolean) : obj;

  return Object.keys(data).reduce(
    (acc, key) => {
      const value = data[key];
      if (Boolean(value)) {
        // if we have an object which can be a key-value obj or array in js, then recursively call ourselves. Else just set the value for the position.
        acc[key] = typeof value === "object" ? compactObject(value) : value;
      }
      return acc;
    },
    Array.isArray(obj) ? [] : {}
  );
}
```

## Code Explanation

The approach:

1. Set a const called data, its value is based upon whether the input param `obj` is an array or not. If it is an array, we run the `filter` prototype on the array to get rid of all values which are falsy. Else we just return the key-value based object.
2. We then create a new array using `Object.keys`, for an array input to `Object.keys` it will simply give you the values. For an object input it will give you all the keys.
   1. Then we perform the `reduce` prototype on the array
      1. If obj is an array then the initial value is set to `[]` else its set to an empty `{}`.
   2. We then get the value iterated by looking up data by the key index from `Object.keys`;
   3. If that value is true, then we set the `value` in our `accumulator` at index `key` to either be a recursively called instance of ourself if value is an object (_which in js can mean an object or array_), or simply the value in question which could be a primitive such as string, number etc.
   4. Then we return the accumulated response (our resulting array or object).

This allows us to perform a depth first traversal through data to process any sub-arrays / objects, bubbling up their results so we iterate logically over each index at a time.

## Key takeaways

1. `Boolean()` can result in `true` for `arrays`, `numbers` etc.
2. `Array.reduce` is a really helpful tool for processing / transforming `arrays` and `objects`. Gives a nice alternative to `map()`.
3. When thinking about composing a recursion based solution. Think of implementing your function at the bottom node upwards. I keep approaching these problems with a top downwards mindset and end up over-engineering it and getting lost. It boils down to results bubbling up from the bottom and how they then get processed further up.

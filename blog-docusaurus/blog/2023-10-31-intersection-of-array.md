---
slug: intersection-of-array
title: "Intersection of unsorted array"
description: "This problem asks us to find common elements in 2 given arrays."
authors: will
---

## The problem statement

Given two arrays, find the intersection(items occur in both arrays)

1. arrays are not sorted, and might have duplicates.
2. you can modify the arrays
3. you can return the items in any order, but without duplicates.

This is an easy problem, What is the time & space complexity of your approach?

### Examples:

There are no examples for the given problem, but lets come up with some:
`getIntersection([1,2,3], [1]) = [1]`

`getIntersection([1,2,3], [1, 2]) = [1,2]`

`getIntersection([3], [1, 2]) = [0]`

### Understanding the problem

This problem is basically asking us to find elements that exist **in both** arrays.

My instinct was to traverse through each array and store a hit when we find elements that are in both.

But we can go simpler than that.

We can assume that if we iterate through one of the input arrays and check for matching elements in the other, that we will have all of our results. This is because if the items in array a are not in our b iteration items then they don't exist.

So all we need to do is loop array b, check if array a contains the item in question. If it does then we have a matching item. Any other items in array a wont be scanned but they dont have a corresponding element in array b anyway.

### Code

```ts
function getIntersection(arr1: number[], arr2: number[]): number[] {
  const result = new Set<number>();
  for (let n of arr2) {
    if (arr1.indexOf(n) !== -1) {
      result.add(n);
    }
  }
  return [...result];
}
```

## Code Explanation

This code is pretty self explanatory.

## Key takeaways

1. The time complexity is still O(n) as we have to iterate through `n` items of `arr2`. But we aren't looping through both or doing any crazy result iterations after array iterations.

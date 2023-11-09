---
slug: 217-contains-duplicate
title: "217 - Contains Duplicate"
description: "This problem asks us to create a func to tell us if the array contains any duplicate values."
authors: will
---

## The problem statement

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

### Understanding the problem

When we go through the array, we need to decide if the iterated number has already been found. If it has then we want to return true. Else let the whole loop of the array continue and return false.

To store a history of the numbers we find we want to use a `Set` data type. Primarily because insertion, deletion and lookup all have O(1) time complexity.

### Examples:

**Example 1:**

**Input:** nums = [1,2,3,1]

**Output:** true

**Example 2:**

**Input:** nums = [1,2,3,4]

**Output:** false

**Example 3:**

**Input:** nums = [1,1,1,3,3,4,3,2,4,2]

**Output:** true

### Code solution

Potentially need to iterate all elements in the array.

- Time: O(n) - n items in nums.
- Space: O(n) - set grows as the iterations carry on.

```ts
function containsDuplicate(nums: number[]): boolean {
  const iterated = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (iterated.has(nums[i])) return true;
    iterated.add(nums[i]);
  }
  return false;
}
```

## Key Takeaways

1. Set is a really efficient js data structure.

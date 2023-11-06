---
slug: 136-single-number
title: "136 - Single Number"
description: "This problem asks us to find the integer in an array that only occures once. It is guaranteed from the input that at least one will."
authors: will
---

## The problem statement

Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.

You must implment a solution with a linear runtime complexity and use only constant extra space..

### Understanding the problem

So this problem threw me off initially.

My initial approach was to say okay, i'm going to store a hashmap of integers and the amount that they occur.

Then i'll just iterate through it and find the entry that has a value of 1 and return its key.

But the problem says: **Linear complexity and constant space**. This means upon each run we can do O(n) time complexity, but we need to use O(1) space. Meaning that the variables we assign, they don't change size regardless of the size of the input. So this throws the map answer out the window.

However, if we think about this problem again. We know that the integer that only occurs **once** will have the same index as the last time that it occurs.

So we can iterate through the nums and check the index of the integer and it's last index via some prototypes from js. If it's the same, we have found the number with a singular occurence and can return it. This gives us a space complexity of O(1) as we are not creating any new vars as part of our workflow. It is linear in time because we still have to loop through the array `n` amount of times. where `n` <= `nums.length`.

### Approaching the problem

### Examples:

**Example 1:**

**Input**: nums = [2,2,1]

**Output**: 1

**Example 2:**

**Input**: nums = [4,1,2,1,2]

**Output**: 4

**Example 3:**

**Input**: nums = [1]

**Output**: 1

### Code solution

Time: O(n)
Space: O(1)

```ts
function singleNumber(nums: number[]): number {
  if (nums.length === 1) return nums[1];
  for (let i = 0; i <= nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return nums[i];
    }
  }
  return 0;
}
```

## Key Takeaways

1. Keep refreshing the knowledge on js prototypes they will come in handy!
2. Think about how to solve the problem outside of the box. Stop remembering past solutions and thinking of using them as gospel. Try to analytically digest the problem and understand what it's after. Just like we did with the index solution.

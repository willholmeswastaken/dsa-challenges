---
slug: 75-sort-colors
title: "75 - Sort Colors"
description: "This problem asks us to sort an array such that each color (red, white and blue) are adjacent to each other. Must be solved inline."
authors: will
---

## The problem statement

Given an array `nums` with `n` objects colored red, white, or blue, sort them **in-place** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

### Understanding the problem

You'll notice from the problem statement and from the examples that this array is just an array of number values. The task is to make each possible value (1, 2, 3) sit next to each other. We can solve this with a bubble sort algorithm, whilst not the most optimal. It will get the job done, seeing as I have just learnt about bubble sorts.

### Examples:

**Example 1:**

> **Input:** nums = [2,0,2,1,1,0]
>
> **Output:** [0,0,1,1,2,2]

**Example 2:**

> **Input:** nums = [2,0,1]
>
> **Output:** [0,1,2]

### Code solution

```ts
function sortColors(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
      }
    }
  }
}
```

## Key Takeaways

1. Bubble sort is not efficient, but it was good to solve a problem learing the algo that I have recently learnt.

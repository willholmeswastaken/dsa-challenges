---
slug: 342-power-of-four
title: "342 - Power of four"
description: "This problem involves detecting if a number is a power of four or not."
authors: will
---

## The problem statement

Given an integer `n` return `true` if its is a power of four. Otherwise, return false.

An integer `n` is a power of four, if there exists an integer `x` such that `n === 4^x`.

### Understanding the problem

We can solve this problem with recursion:

1. 1 is a valid result for being a power of a number as the remainder will always be 0.
2. If `n` is `<= 0` then we should return false as a negative number can't be a power of a number.
3. If dividing `n` by `4` results in a remainder then we should return false as it can't be divided equally.

### Approaching the problem

### Examples:

**Example 1:**

**Input**: n = 16

**Output**: true

**Example 2:**

**Input**: n = 5

**Output**: false

**Example 3:**

**Input**: n = 1

**Output**: true

### Code solution

Log(n)

```ts
function isPowerOfFour(n: number): boolean {
  if (n === 1) return true;
  if (n <= 0 || n % 4 != 0) return false;
  return isPowerOfFour(n / 4);
}
```

## Key Takeaways

1. 1 is always a factor of a number.
2. Anything to the power of 0 is 1.

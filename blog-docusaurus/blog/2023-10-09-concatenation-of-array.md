---
slug: 1929-concatenation-of-array
title: "1929 - Concatenation of Array"
description: "This problem involves doubling the capacity of an array and duplicating all of the previous elements inside of it."
authors: will
---

## The problem statement

Given an integer array `nums` of length `n`, you want to create an array `ans` of length `2n` where `ans[i] == nums[i]` and `ans[i + n] == nums[i]` for `0 <= i < n` (0-indexed).

Specifically, `ans` is the concatenation of two nums arrays.

Return the array `ans`.

### Understanding the problem

Please return an array that is **double the size** of the **original array** and where you **enter new indexs**, populate them with the **equivalent values** in the before allocated array.

Disecting the parts of the problem:

1. `nums` = integer array
2. `n` = nums.length
3. `ans` = new Array(n \* 2)
4. `ans` elements must equal the same as nums at relevant pointers
5. `ans[i]` must equal `nums[i - n]` where `i > n`

The problem tries to throw you off by giving you the index looped equation in reverse order. Also ans[i + n] in a loop would be out of bound since we would loop the ans array.

We could loop the original array, but guessing that elements will be there rather than truly looping through didn't feel like best practice.

### Approaching the problem

We will want to create a function that has the following:

1. A reference to `nums.length`
2. A new array based upon `nums.length *= 2`
3. A for loop that loops the new array
   1. An `if` statement to check if we are looping an index that is within the original array bounds. If it is then do a 1-1 map. `newArray[i] = nums[i];`
   2. `Else` we will do the following `newArray[i] = nums[i - n]` to get the duplicated positional value.
4. Return the array.

### Examples:

**Example 1:**

**Input**: nums = [1,2,1]

**Output**: [1,2,1,1,2,1]

**Explanation**: The array ans is formed as follows:

- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

**Example 2:**

**Input**: nums = [1,3,2,1]

**Output**: [1,3,2,1,1,3,2,1]

**Explanation**: The array ans is formed as follows:

- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]

**Constraints**:

- n == nums.length
- 1 <= n <= 1000
- 1 <= nums[i] <= 1000

### Code solution

```ts
function getConcatenation(nums: number[]): number[] {
  const n = nums.length;
  // create a 2 times larger array with blank vals
  const newArray = new Array(n * 2).fill(0);
  // loop that new array
  for (let i = 0; i < newArray.length; i++) {
    // if the index matches that within the original array, do a 1-1 map.
    if (i <= n - 1) {
      newArray[i] = nums[i];
    } else {
      // else get the value from nums array at index position i - nums.length; i.e. 4 - 4 = position 0.
      newArray[i] = nums[i - n];
    }
  }
  return newArray;
}
```

## Key Takeaways

1. Making notes at the top of the function to understand and digest the problem before writing any code is a good practice to do. Follow the question and note down the key factors to influence your answer.
2. Creating an array with `new Array(n * 2);` would create the array with a capacity, but wouldnt populate any items. So `.fill(0)` must be called to populate it with a `.length`.

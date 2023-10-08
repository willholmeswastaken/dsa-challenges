---
title: "27 - Remove Element"
excerpt: "This problem involves moving items that equal a given value to the beginning of the array and returning the number of items that have been moved."
date: "2023-10-08T19:02:02.661Z"
author:
  name: Will Holmes
  picture: "https://willholmes.dev/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F13040458&w=128&q=75"
---

## The problem statement

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

Consider the number of elements in `nums` which are not equal to `val` be `k`, to get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

### Understanding the problem

What they are asking for here is the following:

1. Return the count of items that do not equal val.
2. Place the items that do not equal val to the beginning of the array.
3. Don't be concerend about what the val items look like.

Do not:

1. Create a new array and do funky manipulation. This is a test to get you to solve the problem inline with a big O of O(1) in space. Which means no new variables that could hold x items.

### Approaching the problem

We will want to create a function that has the following:

1. A value to hold k which we need to return at the end, but will also act as our pointer to move items to.
2. A for loop to iterate the array.
3. An if statement to check if the item is not equal to val.
   1. A reassignment of the item to position k and increment k.
4. return k.

Remember, they are looking to inline array manipulation and the result of how many vals don't equal val.

### Examples:

**Example 1:**

**Input**: nums = [3,2,2,3], val = 3

**Output**: 2, nums = [2,2,_,_]

**Explanation**: Your function should return k = 2, with the first two elements of nums being 2.

It does not matter what you leave beyond the returned k (hence they are underscores).

**Example 2:**

**Input**: nums = [0,1,2,2,3,0,4,2], val = 2

**Output**: 5, nums = [0,1,4,0,3,_,_,_]

**Explanation**: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.

Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).

### Code solution

```ts
/**
  This func will tell us the number of unique values in an array.
  We do this by looping the array, looking for nums that != val
  Then moving them to the beginning of the array.
 */
function removeElement(nums: number[], val: number): number {
  // Store k as a pointer.
  let k = 0;
  // Loop the array
  for (let i = 0; i < nums.length; i++) {
    // If the item looped is not equal to val
    if (nums[i] !== val) {
      // Set the value of num at k to the current num.
      // K is essentially the last known index to reassign a value to.
      // As we loop, k is confirmed to not be equal to val. so we are safe to replace.
      nums[k] = nums[i];
      // We increment K each time, we know that prev elements wont be overridden
      // Since we are doing in an inline replace when we do find matching elems.
      k++;
    }
  }
  return k;
}
```

## Key Takeaways

1. Pointers are a useful concept in array algorithm questions.
2. Re-read the question 3 times thoroughly, make notes in code. For example, the part about not caring what happens to the val values I missed the first time and spent 15 mins on an inefficient solution.
3. KISS (Keep It Simple Stupid).

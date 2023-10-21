---
slug: 1512-number-of-good-pairs
title: "1512 - Number of good pairs"
description: "This problem involves iterating through an array to discover the number of good pairs that match the required criteria. Easy to do it in O(n^2) but can it be done in O(n)?"
authors: will
---

## The problem statement

Given an array of integers `nums`, return the number of good pairs.

A pair `(i, j)` is called good if `nums[i] == nums[j]` and `i < j`.

### Understanding the problem

When reading the above statement our instinct is to do something like this:

- Loop through nums with i as index
  - Nest loop through nums with j as index
    - if i < j and nums[i] === nums[j]
      - increment a counter
- return total.

This works. But it leaves us with a time complexity of O(n^2) which is exponential and not ideal.

In order for us to understand the better way around this we need to really read into what the question is asking us to do.

1. When we iterate the array, store somewhere the number being iterated and the number of times we have seen that number.
2. As we do that, increment a counter which represents the total number of pairs found.

Lets dive into the code and let the code explain itself

### Code

```ts
function numIdenticalPairs(nums: number[]): number {
  // initialise good pairs counter
  let goodPairs = 0;
  // initialise a map to keep track of previous occurences of numbers
  const matches = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    // if our map has the current number
    if (matches.has(nums[i])) {
      // increment good pairs by the number of previous occurences of
      // the number found in the map. i.e. when we first discover a new number
      // we know we have a 1 value of it, so when we see it again goodPairs
      // gets incremented by 1.
      goodPairs += matches.get(nums[i]);
      // then we update the value of the number entry in the map
      // to be incremented by one.
      matches.set(nums[i], matches.get(nums[i]) + 1);
    } else {
      matches.set(nums[i], 1);
    }
  }
  return goodPairs;
}
```

### How It Works

1. **Function Definition:**
   `numIdenticalPairs` is a function that receives an array of numbers (`nums`) with the purpose of identifying all identical pairs within the array.

2. **Variable Initialization:**

   - `goodPairs` is a counter initialized at 0, used to tally the number of identical pairs.
   - `matches` is a Map that will store each unique number from the array and how many times it appears.

3. **Looping Through the Array:**

   - The function uses a for loop to iterate over each number in the `nums` array.

4. **Logic Within the Loop:**

   - The function checks if the current number is already in the `matches` map.
     - If it is, the function increments the `goodPairs` counter by the amount stored for that number in `matches` and updates the number's count in `matches`.
     - If not, the function adds the number to `matches` with a value of 1.

5. **Conclusion:**
   - After the loop, the function returns the `goodPairs` total, which is the count of all good (identical) pairs in the array.

In essence, this function systematically checks each number, keeps track of the frequency of each, and accumulates a total count of identical pairs. It does so efficiently, which makes it particularly effective for large arrays of numbers.

## Key Takeaways

1. Read through a problem and try to think wider than just the default approach. Think outside the box. Truly understand what a simple ask might be after.

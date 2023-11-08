---
slug: 1431-kids-with-the-greatest-number-of-candies
title: "1431 - Kids With the Greatest Number of Candies"
description: "This problem asks us to calculate the kids that have the highest number of candies after adding an extra number of candies."
authors: will
---

## The problem statement

There are `n` kids with candies. You are given an integer array `candies`, where each `candies[i]` represents the number of candies the `ith` kid has, and an integer `extraCandies`, denoting the number of extra candies that you have.

Return a boolean array `result` of length `n`, where `result[i]` is `true` if, after giving the `ith` kid all the `extraCandies`, they will have the greatest number of candies among all the kids, or `false` otherwise.

Note that multiple kids can have the greatest number of candies.

### Understanding the problem

The problem is asking us to loop through each kid's candy count and see if their new candy amount with the extraCandies added onto ith result is greater than or equal to the highest number of candies in the existing array.

At first I decided to create a new array of candies size and preset the vals to false. Then loop through the array and for each kid, check if their new candy amount was greater or equal to each item in the array. If it was we set their array position to true and move on and then return the array at the end.

This worked. But it's really not efficient as we end up with a space complexity of O(n) and a time complexity of O(n^2).

So lets look at what the question is asking of us again.

Find the _highest_ value of candies in the array. Then loop through the array and return whether the current item in the array + extra candy is greater than the highest value of candies.

By doing an approach like above we can achieve a space complexity of O(1) and a time complexity of O(n).

### Approaching the problem

### Examples:

**Example 1:**

**Input:** candies = [2,3,5,1,3], extraCandies = 3

**Output:** [true,true,true,false,true]

**Explanation:** If you give all extraCandies to:

- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

**Example 2:**

**Input:** candies = [4,2,1,1,2], extraCandies = 1

**Output:** [true,false,false,false,false]

**Explanation:** There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.

**Example 3:**

**Input:** candies = [12,1,12], extraCandies = 10
**Output:** [true,false,true]

### Code solution

Time: O(n^2)
Space: O(n)

```ts
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  // Create the array to hold our results in.
  const result = new Array(candies.length).fill(false);
  for (let i = 0; i < candies.length; i++) {
    // get the new candy result
    const newCandy = candies[i] + extraCandies;
    // apart from the current candy val, check that every other value is less than or equal to new candy.
    if (candies.filter((_, idx) => idx !== i).every((x) => newCandy >= x)) {
      result[i] = true;
    }
  }
  return result;
}
```

Time: O(n)
Space: O(1)

```ts
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  // get the max candy val from the array
  const maxCandies = Math.max(...candies);
  // return a new array where the values are calculated by checking that the new candy amount is greater than or equal to the highest candy amount.
  return candies.map((x) => x + extraCandies >= maxCandies);
}
```

## Key Takeaways

1. Math.max has a lot of uses, make sure to think of the math module in a lot of these problems.
2. By doing a map on the existing array I did not need to create a holding array at the end as it would have kept the results in the same place.
3. Re-read the requirements a good few times. Only after implementing the first way did I have a lightbulb moment and approach in the second way.

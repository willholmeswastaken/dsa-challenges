---
slug: 70-climbing-stairs
title: "70 - Climbing stairs"
description: "This problem asks us to calculate how many ways we can climb the stairs by taking 1 or 2 steps at a time."
authors: will
---

## The problem statement

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

### Understanding the problem

This is a very tricky problem.

My initial thoughts are to solve this problem by using recursion. Recursively stepping through from 0 -> n and at each increment (step), branching off to 1 or 2 and working through each decision tree. We would then eventually get a count of how many ways we can reach n.

However, this would be very expensive. If you imagined all the possible combinations, you would find yourself repeating a lot of the same checks as the same numbers would be reached at decision trees on the left and right of each other.

This is where a concept called dynamic programming can come into play.

Instead of starting at 0 and working towards n. We start from n and work back up to 0.

So imagine our n is 5. We would start at the number 5 and say how many ways can we land on 5. Well we know one way which is to take 5 \* 1 steps. Then we go to 4, we can take one step and get to 5. So therefore we know that we have 1 way to get to 5. So we mark 1 and move to 3. When we get to 4, we already know how many ways to get to 5 which is 1. We also know that when we land on 5 we have 1 way to get there. So we can just add the two previous results together and there is our value for 3. We can continue doing this for each number <= n. Storing the past two results and computing our next values.

This means no storing an object / array of n. Only ever the last two, giving a space complexity of O(1).

### Approaching the problem

### Examples:

**Example 1:**

**Input**: n = 2

**Output**: 2

**Explanation**: There are two ways to climb to the top.

1. 1 step + 1 step
2. 2 steps

**Example 2:**

**Input**: n = 3

**Output**: 3

**Explanation**: There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

### Code solution

Time: O(n)
Space: O(1)

```ts
function climbStairs(n: number): number {
  // Store the last two values when working backwards
  let one = 1,
    two = 1;
  for (let i = 0; i < n - 1; i++) {
    // Store the historical value of one so we don't lose it.
    const temp = one;
    // Add the two previous results and get the new result
    one = one + two;
    // Shift two, to the previous value of one
    two = temp;
  }
  // One will have the total amount of ways we can get to n.
  return one;
}
```

## Key Takeaways

1. I need to do some more investigating into dynamic programming, at least just the basics.
2. Being able to visualize problems like these are quite hard for me, but watching neetcode break it down into a decision tree really helped me grasp the end solution.
3. Watch a video on how to solve a problem rather than just looking at the code solutions. Write up the blog post after.

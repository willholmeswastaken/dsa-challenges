---
slug: 682-baseball-game
title: "682 - Baseball game"
description: "This problem asks us to calculate the score of a baseball game based upon the input params which can mean addition, multiplication or a regular score result."
authors: will
---

## The problem statement

You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings `operations`, where `operations[i]` is the `ith` operation you must apply to the record and is one of the following:

- An integer `x`.
  - Record a new score of `x`.
- `'+'`.
  - Record a new score that is the sum of the previous two scores.
- `'D'`.
  - Record a new score that is the double of the previous score.
- `'C'`.
  - Invalidate the previous score, removing it from the record.

Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

### Understanding the problem

This problem is asking us to essentially perform the basic operations of interacting with a stack.

The instructions are pretty clear. Every test case that they run our code against is going to be valid as specified. So we don't need to create fault tolerant code.

So lets digest:

We want to store a stack of results which are numerical based upon each iteration of operations.

- When `x` then we want to `push` that `int` value into the `stack`.
- When `+` then we want to add `stack[i-1]` to `stack[i-2]` and `push` that `int` value into the `stack`.
- When `D` we want to `stack[i - 1] * 2` and `push` that `int` value into the `stack`.
- When `C` we want to pop the last value from the stack.

Then at the end it wants us to return the sum of `stack`.

That's it. Pretty simple. Let's dive into the code!

### Examples:

**Example 1:**

**Input:** ops = ["5","2","C","D","+"]
**Output:** 30
**Explanation:**

- "5" - Add 5 to the record, record is now [5].
- "2" - Add 2 to the record, record is now [5, 2].
- "C" - Invalidate and remove the previous score, record is now [5].
- "D" - Add 2 \* 5 = 10 to the record, record is now [5, 10].
- "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].

The total sum is 5 + 10 + 15 = 30.

**Example 2:**

**Input:** ops = ["5","-2","4","C","D","9","+","+"]
**Output:** 27
**Explanation:**

- "5" - Add 5 to the record, record is now [5].
- "-2" - Add -2 to the record, record is now [5, -2].
- "4" - Add 4 to the record, record is now [5, -2, 4].
- "C" - Invalidate and remove the previous score, record is now [5, -2].
- "D" - Add 2 \* -2 = -4 to the record, record is now [5, -2, -4].
- "9" - Add 9 to the record, record is now [5, -2, -4, 9].
- "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
- "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].

The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.

**Example 3:**

**Input:** ops = ["1","C"]
**Output:** 0
**Explanation:**

- "1" - Add 1 to the record, record is now [1].
- "C" - Invalidate and remove the previous score, record is now [].
- Since the record is empty, the total sum is 0.

### Code solution

```ts
function calculatePoints(operations: string[]): number {
    const scores: number[] = [];
    for(let i = 0; i < operations.length; i++) {
        switch(operations[i]) {
            case: '+':
                scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
                break;
            case 'D':
                scores.push(scores[scores.length - 1] * 2);
                break;
            case 'C':
                scores.pop();
                break;
            default:
                scores.push(parseInt(opreations[i]));
                break;
        }
    }
    return scores.reduce((acc, curr) => acc + curr, 0);
}
```

## Key Takeaways

1. Think of arrays like stacks. A stack is just a vertical array with the same concept of LIFO (Last in First out) via it's push/pop mechanism.

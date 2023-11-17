---
slug: 1071-greatest-common-divisor-of-strings
title: "1071 - Greatest common divisor of strings"
description: "This problem asks us to find how many times a substring of either 2 strings can go into each string."
authors: will
---

## The problem statement

For two strings `s` and `t`, we say "`t` divides `s`" if and only if `s = t + ... + t` (i.e., `t` is concatenated with itself one or more times).

Given two strings `str1` and `str2`, return the largest string `x` such that `x` divides both `str1` and `str2`.

### Understanding the problem

Initially I approached this problem by looping the strings by the max length string. Then checking that each value at the same index matched each other. This approach was sort of on the right tracks but wouldn't get us to our final destination.

After watching a neetcode solution here is how I would approach the problem.

First of all it's important to understand that the question wants us to find the `largest` possible substring that goes into both strings.

To achieve this we need to validate a few things:

1. That the substring length can be divided by both of the string lengths equally.
2. That the substring can be repeated `x` times where `x` is str.length / substring.length.

Once we know all of this we can simply report back what is the possible substring.

### Approaching the problem

### Examples:

**Example 1:**

**Input**: str1 = "ABCABC", str2 = "ABC"

**Output**: "ABC"

**Example 2:**

**Input**: str1 = "ABABAB", str2 = "ABAB"

**Output**: "AB"

**Example 3:**

**Input**: str1 = "LEET", str2 = "CODE"

**Output**: ""

### Code solution

Time: O(n)
Space: O(1)

```ts
function gcdOfStrings(str1: string, str2: string): string {
  function isDivisor(desiredLength: number): boolean {
    // If the desired length cant product a non-remainder number when divided by the string lengths, then this isn't a divisor.
    if (str1.length % desiredLength !== 0 || str2.length % desiredLength !== 0)
      return false;

    // Get the amount of times that str1 and str2 can be divided by our target length
    let factorial1 = str1.length / desiredLength,
      factorial2 = str2.length / desiredLength;

    // Check whether the substring which is generated by repeating the string by 0 and desiredLength f times is equal to both of our strings.
    // i.e. 6 / 2 = 3 && 2 / 2 = 0, AB * 3 = ABABAB, AB * 0 = AB.
    return (
      str1.substring(0, desiredLength).repeat(factorial1) === str &&
      str1.substring(0, desiredLength).repeat(factorial2) === str2
    );
  }
  // Loop the smallest string length
  for (let i = Math.min(str1.length, str2.length); i > 0; i--) {
    if (isDivisor(i)) {
      // if we have found a divisor then return the substring.
      return str1.substring(0, i);
    }
  }
  return "";
}
```

## Key Takeaways

1. strings have a useful prototype called `.repeat()` which takes an amount of times that you can repeat a string.
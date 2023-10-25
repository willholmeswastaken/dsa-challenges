---
slug: 1768-merge-strings-alternatively
title: "1768 - Merge Strings Alternatively"
description: "This problem asks us to take two words and merge them together one character in one word and one character in two word until we reach the end of them both."
authors: will
---

## The problem statement

You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

### Examples:

**Example 1:**

Input: word1 = "abc", word2 = "pqr"

Output: "apbqcr"

Explanation: The merged string will be merged as so:

word1: a b c

word2: p q r

merged: a p b q c r

**Example 2:**

Input: word1 = "ab", word2 = "pqrs"

Output: "apbqrs"

Explanation: Notice that as word2 is longer, "rs" is appended to the end.

word1: a b

word2: p q r s

merged: a p b q r s

**Example 3:**

Input: word1 = "abcd", word2 = "pq"

Output: "apbqcd"

Explanation: Notice that as word1 is longer, "cd" is appended to the end.

word1: a b c d

word2: p q

merged: a p b q c d

### Understanding the problem

This problem is asking us to take two words and build a new one from iterating each char at the same position in both words and merge them together.

### Code

```ts
function mergeAlternately(word1: string, word2: string): string {
  const chars = [];
  // Loop over the max word length
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    // if the index is in bounds of word1 push that char first
    if (i < word1.length) chars.push(word1[i]);
    // if the index is in bounds of word 2 push that char secondly
    if (i < word2.length) chars.push(word2[i]);
    // this will also allow for the example where one word is longer than the other.
  }
  // return the array as a string.
  return chars.join("");
}
```

## Code Explanation

This solution is pretty simple and well documented. See above.

## Key takeaways

1. Remember the data we get give in our inputs, like in this example we can iterate over both by using `Math.max()` to get the largest word length and traverse the array accordingly.
2. Keep it simple wins.

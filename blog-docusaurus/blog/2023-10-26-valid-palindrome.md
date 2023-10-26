---
slug: 125-valid-palindrome
title: "125 - Valid Palindrome"
description: "This problem asks us to detect if an incoming string is a valid palindrome."
authors: will
---

## The problem statement

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

### Examples:

**Example 1:**

Input: s = "A man, a plan, a canal: Panama"

Output: true

Explanation: "amanaplanacanalpanama" is a palindrome.

**Example 2:**

Input: s = "race a car"

Output: false

Explanation: "raceacar" is not a palindrome.

**Example 3:**

Input: s = " "

Output: true

Explanation: s is an empty string "" after removing non-alphanumeric characters.

Since an empty string reads the same forward and backward, it is a palindrome.

### Understanding the problem

So lets breakdown how we would tackle solving this problem:

1. Initialize two pointers, one at the beginning of the string, second at the end of the string.
2. Check whether or not the current pair of characters is identical.
3. If they are not identical, return false. Otherwise move both pointers by one index towards the middle.
4. Keep traversing them toward the middle until the pointers meet.
5. If we reach the middle of the string without finding a mismatch, return true.

This is a common technique that the problem is asking us to leverage. Called 'two-pointers'. It can be used for a wide range of problems.

Lets see how we can use it below...

### Code

```ts
function isPalindrome(s: string): boolean {
  // We need to strip out all special chars, and lowercase the string.
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  // setup our pointers.
  let left = 0,
    right = s.length - 1;
  // while the pointers haven't met each other in the middle.
  while (left <= right) {
    // If the character at left does not match right, then it's not a palindrome.
    if (s[left] !== s[right]) return false;
    // Increment / Decrement pointers as the chars match.
    left++;
    right--;
  }
  // We made it through the while statement. So it's a palindrome!
  return true;
}
```

## Code Explanation

This code is pretty self explanatory.

## Key takeaways

1. This pattern of using two pointers is quite a common one, so it would be good to learn it further to apply it more widely.

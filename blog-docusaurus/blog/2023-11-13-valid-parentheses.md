---
slug: 20-valid-parentheses
title: "20 - Valid Parentheses"
description: "This is a very common interview problem. We need to detect if the string is valid by looking at whether parentheses have been open / closed correctly."
authors: will
---

## The problem statement

Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type

### Understanding the problem

So lets break down our approach here:

1. Store a map of all the closing brackets as keys, with opening as values. This will allow us to perform lookups when looping through chars.
2. Create an array which will hold our latest opening braces.
3. Loop through the input string
   1. If map contains char (it's a closing brace)
      1. If our array has items, and the latest item in our array is equal to the map value of our closing brace.
         1. We have found a match, so we remove that opening brace from our array.
      2. Else we need to return false from our function as we have an invalid set of braces. The one we are iterating does not close the latest brace.
   2. Else it doesn't contain our brace, and the brace is opening **not** closing so we push that brace into our array.
4. Return whether our array of opening braces has a length of 0 (_which it should_) at the end of the function. This means all open braces were closed successfully.

### Examples:

**Example 1:**

**Input:** s = "()"

**Output:** true

**Example 2:**

**Input:** s = "()[]{}"

**Output:** true

**Example 3:**

**Input:** s = "(]"

**Output:** false

### Code solution

```ts
function isValid(s: string): boolean {
  const closeToOpen = new Map<string, string>();
  closeToOpen.set("}", "{");
  closeToOpen.set("]", "[");
  closeToOpen.set(")", "(");

  const stack: string[] = [];
  for (const c of s) {
    if (closeToOpen.has(c)) {
      // If the last item in the stack is equal to the opening version of the current closing brace, then remove it from the stack.
      if (stack.length > 0 && stack[stack.length - 1] === closeToOpen.get(c)) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
}
```

## Key Takeaways

1. Using a hashmap to match closing chars to opening was a technique that Neetcode used, after a while of reading the code it made sense to me. I'll make sure to apply this technique in other problems where I need to match `x` char to `y` char.
2. An array is basically a stack.

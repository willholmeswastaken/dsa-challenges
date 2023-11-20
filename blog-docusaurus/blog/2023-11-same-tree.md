---
slug: 100-same-tree
title: "100 - Same tree"
description: "This problem asks us to compare if two binary trees are the same."
authors: will
---

## The problem statement

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

### Understanding the problem

This is a really easy introduction to binary trees.

It's essentially asking us to traverse through the binary tree and check if the values are the same at each level we traverse until we get to the bottom.

We can solve this recursively in a DFS manner.

### Examples:

**Example 1:**

**Input:** p = [1,2,3], q = [1,2,3]

**Output:** true

**Example 2:**

**Input:** p = [1,2], q = [1,null,2]

**Output:** false

**Example 3:**

**Input:** p = [1,2,1], q = [1,1,2]

**Output:** false

### Code solution

```ts
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // if the nodes are both null then it's equal
  if (p === null && q === null) return true;
  // if one node is null and the other isnt then they are not equal
  if (p === null || q === null) return false;
  // recursively traverse the values whilst checking that the current node left and right values are equal.
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
}
```

## Key Takeaways

1. All the challenges that have required recursion before gave me the intuition to use it in this problem. Whilst it's not a challenging problem it's reassuring to know that i'm starting to notice patterns.

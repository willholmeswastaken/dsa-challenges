---
slug: 206-reverse-linked-list
title: "206 - Reverse Linked List"
description: "This problem simply asks us to reverse a linked list."
authors: will
---

## The problem statement

Given the `head` of a singly linked list, reverse the list, and return the reversed list.

### Examples:

**Example 1:**

Input: head = [1,2,3,4,5]

Output: [5,4,3,2,1]

**Example 2:**

Input: head = [1,2]

Output: [2,1]

**Example 3:**

Input: head = []

Output: []

### Understanding the problem

In a linked list you will normally have a structure that looks like:

```ts
class Node {
  val: number;
  next: Node | null;

  constructor(val?: number, next?: Node | null) {
    this.val = val;
    this.next = next;
  }
}
```

We need to take the numbers from the examples in the array and imagine them packaged up into a node. Then just simply reverse.

Steps to process the problem:

1. A list node at the tail of a list will have a `next` val of `null`.
2. Recursion can help us traverse through the array and work backwards.

### Code

```ts
function reverseList(head: Node | null): Node | null {
  // If the incoming node is null, just return out.
  if (!head) return head;

  // create a new func that we can recursively call.
  // curr, is our current node to process. Parent is the prev node processed.
  function reverse(curr: Node, parent: Node | null) {
    // set a next pointer.
    const next = curr.next;
    // override the value of curr to have a new next value set to the prev node. This starts our reversal.
    curr = new ListNode(curr.val, parent);

    // if we have no forward looking next node, just return our current one as we are at the tail.
    if (!next) return curr;
    // else process the next node, with the prev node as the one just processed.
    return reverse(next, curr);
  }
  // start the reversal process at head.
  return reverse(head, null);
}
```

## Code Explanation

Visually this code allows us to do the following:

1. reverse({1, 2}, null)
   1. reverse({ 2, 3}, 1)
      1. reverse({ 3, 4}, 2)
         1. reverse({ 4, 5}, 3)
            1. reverse({ 5, 4}, null) <- this gets returned at the end.

## Key takeaways

1. Recursion isn't limited to the function that they provide. Be creative with inner functions or make use of closure to make recursion work for your solution.
2. I struggle with visualising recursion and how it will progress through. I should find some resources to help with that.

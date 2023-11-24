---
slug: 203-remove-linked-list-elements
title: "203 - Remove Linked List Elements"
description: "This problem asks us to remove linked list elements where the value passed in equals the current linked list elements value."
authors: will
---

## The problem statement

Given the `head` of a linked list and an integer `val`, remove all the nodes of the linked list that have `Node.val === val`, and return the new head.

### Understanding the problem

### Problem Statement

Given a singly linked list (i.e., each node has a `next` pointer only), the goal is to remove all nodes that have a value equal to a specified `value`.

### Recursive Approach

- The process involves **recursively traversing** the linked list.
- At each step, the function makes a recursive call for the `next` node of the current node (`head.next`).

### Base Case

- The recursion terminates when the current node (`head`) is `null`. In this case, the function returns `null`. This base case is crucial for stopping the recursion.

### Removing Matching Nodes

- After the recursive call, the function checks if the value of the current node (`head.val`) equals the specified `value`.
- If it does, the current node is **skipped** by returning `head.next`. This effectively removes the current node from the list as the parent node in the call stack will now point its `next` to `head.next`.
- If the current node's value does not match `value`, the current node is **retained** by returning `head`.

### Result

- This approach ensures that all nodes with the value equal to `value` are removed from the list.
- The list is updated **in place**, and the modified list is returned.

## Examples:

**Example 1:**

![diagram](https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg)

> **Input:** head = [1,2,6,3,4,5,6], val = 6
>
> **Output:** [1,2,3,4,5]
>
> **Example 2:**
>
> **Input:** head = [], val = 1
>
> **Output:** []
>
> **Example 3:**
>
> **Input:** head = [7,7,7,7], val = 7
>
> **Output:** []

## Code solution

```ts
function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return null;
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
}
```

## Key Takeaways

1. Read the question!! I first implemented a solution for doubly linked lists and then realised it was for singly.
2. Recursion is becoming easier to visualise the more that I do it.

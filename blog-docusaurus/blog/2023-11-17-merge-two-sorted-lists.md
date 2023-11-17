---
slug: 21-merge-two-sorted-lists
title: "25 - Merged two sorted lists"
description: "This problem asks us to take two sorted and increasing lists, merge them  together and return the starting node."
authors: will
---

## The problem statement

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

### Understanding the problem

A few things to note;

1. Lists are in increasing order node after node.
2. They are both sorted lists.

We can go through either one of two routes:

1. Iterative - use a while loop and go through the whole node list collection, storing a ref to the top via a new dummy node.
2. Recursive - recursively traverse the lists at the same time.

Both approaches are appropriate solutions.

### Examples:

**Example 1**
![alt text](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

**Input**: list1 = [1,2,4], list2 = [1,3,4]

**Output**: [1,1,2,3,4,4]

**Example 2:**

**Input:** list1 = [], list2 = []

**Output:** []

**Example 3:**

**Input:** list1 = [], list2 = [0]

**Output:** [0]

### Code solution

Iterative:

```ts
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Create a placeholder head node
  let head = new ListNode();
  // Set the tail position to start at head
  let tail = head;

  // While both lists have values for us to compare
  while (list1 && list2) {
    // If list 1's value is less than list 2, then we want that to go first. So we set that as the next value in the tail.
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      // Else list 2's value goes next in line of the tail.
      tail.next = list2;
      list2 = list2.next;
    }
    // Set the tail to the next pointer.
    tail = tail.next;
  }
  // One of the lists will be null by the end (or both could be) just append the leftover node at the end of the tail. (It will be a greater value as lower ones have already been added).
  tail.next = list1 ? list1 : list2;

  // return head.next because head.val was a dummy.
  return head.next;
}
```

Recursive:

```ts
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // If one of the lists are null, return the other one.
  if (!list1) return list2;
  if (!list2) return list1;

  let merged: ListNode;

  // if list1.val is less than list2.val, create our head node, then set the next value as the current func but with the next list1 value and the current list2 value.
  if (list1.val < list2.val) {
    merged = new ListNode(list1.val, mergeTwoLists(list1.next, list2));
  } else {
    // Same here as above, except l2 and l1.
    merged = new ListNode(list2.val, mergeTwoLists(list1, list2.next));
  }

  // return the end product.
  return merged;
}
```

## Key Takeaways

1. Visualizing recursive / traversal based algorithms are something that i struggle with and need to work on (with practice).
2. Keep re-practicing this question, it's a good one to know how to solve thoughtfully as opposed to trying to memorise solutions.

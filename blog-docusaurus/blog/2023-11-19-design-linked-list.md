---
slug: 707-design-linked-list
title: "707 - Design Linked List"
description: "This problems asks us to design and implement a class that represents a doubly linked list."
authors: will
---

## The problem statement

Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: `val` and `next`. `val` is the value of the current node, and `next` is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute `prev` to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the `MyLinkedList` class:

- `MyLinkedList()` Initializes the `MyLinkedList` object.
- `int get(int index)` Get the value of the `indexth` node in the linked list. If the index is invalid, return `-1`.
- `void addAtHead(int val)` Add a node of value `val` before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
- `void addAtTail(int val)` Append a node of value `val` as the last element of the linked list.
- `void addAtIndex(int index, int val)` Add a node of value `val` before the `indexth` node in the linked list. If `index` equals the length of the linked list, the node will be appended to the end of the linked list. If `index` is greater than the length, the node will not be inserted.
- `void deleteAtIndex(int index)` Delete the `indexth` node in the linked list, if the index is valid.

### Understanding the problem

For this problem it's easier for me to just express the solution in code. But generally here it just wants us to do basic operations of linked list manipulation for our doubly linked list. It gets tricky with adding / deleting at a given index which is why this problem is a medium one.

### Examples:

**Example 1:**

**Input**
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]

[[], [1], [3], [1, 2], [1], [1], [1]]

**Output**

[null, null, null, null, 2, null, 3]

**Explanation**

- MyLinkedList myLinkedList = new MyLinkedList();
- myLinkedList.addAtHead(1);
- myLinkedList.addAtTail(3);
- myLinkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
- myLinkedList.get(1); // return 2
- myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
- myLinkedList.get(1); // return 3

### Code solution

```ts
class LNNode {
  prev: LNNode | null;
  next: LNNode | null;
  val: number;

  constructor(val: number) {
    this.prev = null;
    this.next = null;
    this.val = val;
  }
}

class MyLinkedList {
  head: LNNode | null;
  tail: LNNode | null;

  constructor() {
    // initialise our linkedlist with two dummy pointers. This makes deletions and insertions easier as we don't have to worry about the linkedlist being in a certain state.
    this.head = new LNNode(0);
    this.tail = new LNNode(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(index: number): number {
    // loop through the linked list until we have reached our index. We do this by decrementing until index is 0.
    let curr = this.head.next;
    while (curr && index > 0) {
      curr = curr.next;
      index -= 1;
    }
    // We dont want to return the dummy node at this.tail, so we just make sure that the loop didn't get to that. We wont ever hit dummy head because we start at this.head.next;
    if (curr && curr !== this.tail && index === 0) {
      return curr.val;
    }
    // We haven't found our item so return -1.
    return -1;
  }

  addAtHead(val: number): void {
    const node = new LNNode(val);
    const next = this.head.next;
    const prev = this.head;

    // set dummy next to new node
    prev.next = node;
    // set the first actual value's prev to new node
    next.prev = node;
    // set new node next to actual value
    node.next = next;
    // set new node prev to dummy
    node.prev = prev;
  }

  addAtTail(val: number): void {
    const node = new LNNode(val);
    const next = this.tail;
    const prev = this.tail.prev;

    // set dummy next to new node
    prev.next = node;
    // set the first actual value's prev to new node
    next.prev = node;
    // set new node next to actual value
    node.next = next;
    // set new node prev to dummy
    node.prev = prev;
  }

  addAtIndex(index: number, val: number): void {
    let curr = this.head;
    while (curr && index > 0) {
      curr = curr.next;
      index -= 1;
    }
    if (!curr) return;

    const node = new LNNode(val);
    const next = curr.next;

    // set new node next to the next item from our index found node
    node.next = next;
    // set new node prev to the current index found node
    node.prev = curr;
    // set the current index found node next, to our new node.
    curr.next = node;

    // if curr.next is not null (exists) then set its prev pointer to our new node.
    if (next) next.prev = node;
  }

  deleteAtIndex(index: number): void {
    let curr = this.head.next;
    while (curr !== this.tail && index > 0) {
      curr = curr.next;
      index -= 1;
    }
    if (!curr || curr === this.tail) return;

    const prev = curr.prev;
    const next = curr.next;

    // set curr.prev.next = curr.next; i.e. imagine 1,2,3 we want to delete 2 so we set 1.next = 3;
    if (prev) prev.next = next;
    // set curr.next.prev = curr.prev; i.e. imagine 1,2,3 we want to delete 2 so we set 3.prev = 1;
    if (next) next.prev = prev;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
```

## Key Takeaways

1. Keep re-trying this one from scratch. It's a new concept and therefore a weak area of mine. I'm starting to grasp the concepts now, it's just taking some time initially as I struggle to visualise how new algos work in my head.
2. Having done single linked lists before hand, I wasn't so much in the dark. It's just the node switching and in the relevant order that throws me off.
3. Looping with a while loop is sensible and seems to be a running pattern with linked lists.
4. This was my first medium question in a while. Whilst I didn't complete it on my own, I did learn a lot from it.

---
slug: 1472-design-browser-history
title: "1472 - Design Browser History"
description: "This problem asks us to implement an api relevent to how browser history behaves (we implement with a doubly linked list)."
authors: will
---

## The problem statement

You have a **browser** of one tab where you start on the `homepage` and you can visit another `url`, get back in the history number of `steps` or move forward in the history number of `steps`.

Implement the `BrowserHistory` class:

- `BrowserHistory(string homepage)` Initializes the object with the homepage of the browser.
- `void visit(string url)` Visits url from the current page. It clears up all the forward history.
- `string back(int steps)` Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
- `string forward(int steps)` Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

### Understanding the problem

This problem is essentially testing us on our ability to implement a doubly linked list.

We need to store the following:

1. A dummy `head` pointer to reference the head of the linked list when performing `back` operations.
2. A dummy `tail` pointer to reference the tail of the linked list when performing `forward` operations.
3. A `current node` pointer to store where we are currently at in our browser history.

Once we have these, implementing the solution is fairly straight forward.

For visiting, we just set the visit node: `next` = tail, `prev` = current node. Then update those pointers accordingly and set our current pointer to `next`.

For back, we just loop steps until steps is decreased to 0 OR the current item equals `head.next`. Update current pointer and then return the val.

Similar for forward, except just going the opposite way to `tail.prev`.

Overall, this is a really fun problem to solve!!

### Examples:

**Example:**

> **Input:**
>
> ["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back",> "back"]
>
> [["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.> com"],[2],[2],[7]]
>
> **Output:**
>
> [null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com",> "google.com","leetcode.com"]
>
> **Explanation:**
>
> 1. BrowserHistory browserHistory = new BrowserHistory("leetcode.com");
> 2. browserHistory.visit("google.com"); // You are in "leetcode.com". Visit "google.com"
> 3. browserHistory.visit("facebook.com"); // You are in "google.com". Visit "facebook.com"
> 4. browserHistory.visit("youtube.com"); // You are in "facebook.com". Visit "youtube.com"
> 5. browserHistory.back(1); // You are in "youtube.com", move back to > "facebook.com" return "facebook.com"
> 6. browserHistory.back(1); // You are in "facebook.com", move back to > "google.com" return "google.com"
> 7. browserHistory.forward(1); // You are in "google.com", move forward to > "facebook.com" return "facebook.com"
> 8. browserHistory.visit("linkedin.com"); // You are in "facebook.com". Visit "linkedin.> com"
> 9. browserHistory.forward(2); // You are in "linkedin.com", you cannot move > forward any steps.
> 10. browserHistory.back(2); // You are in "linkedin.com", move back two > steps to "facebook.com" then to "google.com". return "google.com"
> 11. browserHistory.back(7); // You are in "google.com", you can move back > only one step to "leetcode.com". return "leetcode.com"

### Code solution

```ts
class LNode {
  val: string;
  prev?: LNode;
  next?: LNode;

  constructor(val: string) {
    this.val = val;
  }
}

class BrowserHistory {
  private readonly head: LNode;
  private readonly tail: LNode;
  private curr: LNode;

  constructor(homepage: string) {
    this.head = new LNode("");
    this.tail = new LNode("");

    const home = new LNode(homepage);
    home.next = this.tail;
    home.prev = this.head;

    this.head.next = home;
    this.tail.prev = home;
    this.curr = home;
  }

  visit(url: string): void {
    const visitNode = new LNode(url);
    const prev = this.curr;

    visitNode.next = this.tail;
    visitNode.prev = prev;

    this.curr.next = visitNode;
    this.tail.prev = visitNode;
    this.curr = this.curr.next;
  }

  back(steps: number): string {
    let curr = this.curr;
    while (steps > 0) {
      if (curr === this.head.next) break;
      curr = curr?.prev!;
      steps -= 1;
    }

    this.curr = curr!;
    return curr!.val;
  }

  forward(steps: number): string {
    let curr = this.curr;
    while (steps > 0) {
      if (curr === this.tail.prev) break;
      curr = curr?.next!;
      steps -= 1;
    }

    this.curr = curr!;
    return curr!.val;
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
```

## Key Takeaways

1. Doing the design linked list question has really helped me understand how to approach doubly linked list problems. This problem made me think about implementing a current pointer to the list which was a new technique!
2. I solved this from start to finish with no help, given it's a medium. Quite happy with it!
3. There is a real common pattern to solving doubly linked list questions and that shows the more I do them.

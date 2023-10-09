---
title: "Neetcode - js dynamic array"
excerpt: "This problem involves re-creating the behaviour of a dynamic array inside of a custom class."
date: "2023-10-09T17:45:19.128Z"
author:
  name: Will Holmes
  picture: "https://willholmes.dev/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F13040458&w=128&q=75"
---

## Overview

In computer science we have two different types of arrays. We have static arrays and we have dynamic arrays.

### Static arrays

These are arrays which have an allocated amount of capacity and cannot increase without being re-created. They are commonly found in lower level languages in those such as c++.

### Dynamic arrays

These are arrays which will scale with the data being requested to be stored. They are found in all languages.

## The challenge

Re-create the behaviour of a js dynamic array inside of a custom typescript class.

### Here are the rules:

Design a Dynamic Array (aka a resizable array) class, such as an `ArrayList` in `Java` or a `vector` in `C++`.

Your `DynamicArray` class should support the following operations:

- DynamicArray(int capacity) will initialize an empty array with a capacity of capacity, where capacity > 0.
- int get(int i) will return the element at index i. Assume that index i is valid.
- void set(int i, int n) will set the element at index i to n. Assume that index i is valid.
- void pushback(int n) will push the element n to the end of the array.
- int popback() will pop and return the element at the end of the array. Assume that the array is non-empty.
- void resize() will double the capacity of the array.
- int getSize() will return the number of elements in the array.
- int getCapacity() will return the capacity of the array.

If we call void pushback(int n) but the array is full, we should resize the array first.

**Example 1:**

**Input**:
["Array", 1, "getSize", "getCapacity"]

**Output**:
[null, 0, 1]
Example 2:

**Input**:
["Array", 1, "pushback", 1, "getCapacity", "pushback", 2, "getCapacity"]

**Output**:
[null, null, 1, null, 2]
Example 3:

**Input**:
["Array", 1, "getSize", "getCapacity", "pushback", 1, "getSize", "getCapacity", "pushback", 2, "getSize", "getCapacity", "get", 1, "set", 1, 3, "get", 1, "popback", "getSize", "getCapacity"]

**Output**:
[null, 0, 1, null, 1, 1, null, 2, 2, 2, null, 3, 3, 1, 2]
Note:

The index i provided to get(int i) and set(int i) is guranteed to be greater than or equal to 0 and less than the number of elements in the array.

```ts
class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.length = 0;
    this.arr = new Array(this.capacity).fill(0);
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    return this.arr[i];
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i, n) {
    this.arr[i] = n;
  }

  /**
   * @param {number} n
   * @returns {void}
   */
  pushback(n) {
    if (this.length === this.capacity) {
      this.resize();
    }
    this.arr[this.length] = n;
    this.length++;
  }

  /**
   * @returns {number}
   */
  popback() {
    return this.arr[--this.length];
  }

  /**
   * @returns {void}
   */
  resize() {
    this.capacity *= 2;
    const newArr = new Array(this.capacity).fill(0);
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.arr[i];
    }
    this.arr = newArr;
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.length;
  }

  /**
   * @returns {number}
   */
  getCapacity() {
    return this.capacity;
  }
}
```

## Learnings

This problem forces you to really think about what js has to do under the hood to maintain arrays. It was tricky to understand and I initially resorted to using helper funcs provided by js out the box. But after reading and digesting the solution, I realised that most of this stuff can be done manually.

It's another case of re-reading the question and really understand what it's asking for.

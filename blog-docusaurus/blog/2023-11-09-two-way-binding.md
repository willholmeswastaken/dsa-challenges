---
slug: bfe-154-two-way-binding
title: "BFE.DEV - 154 - Two-way binding"
description: "This problem asks us to bind an object with state to a dom elements input changes."
authors: will
---

## The problem statement

Let's do some simple two-way binding.

Please create a function `model(state, element)`, to bind `state.value` to the HTMLInputElement `element`.

### Understanding the problem

Essentially when `state.value` changes we need to update the value of `element.value` to state's new value.

This includes adding an event listener to the element and also to the state value property.

### Approaching the problem

### Examples:

```ts
const input = document.createElement("input");
const state = { value: "BFE" };
model(state, input);

console.log(input.value); // BFE
state.value = "dev";
console.log(input.value); // dev
input.value = "BFE.dev";
input.dispatchEvent(new Event("change"));
console.log(state.value); // BFE.dev
```

### Code solution

```ts
function model(state: { value: string }, element: HTMLInputElement) {
  // set the initial dom element value
  element.value = state.value;

  // add event listener so that when element.value changes we update state.value to be element.value.
  element.addEventListener("change", () => {
    state.value = element.value;
  });

  // defineProperty will either add a new property or update the behaviour of an existing one. This allows us to react to updates of state.value and also update element.value.
  Object.defineProperty(state, "value", {
    get: function () {
      return this._value;
    },
    set: function (value) {
      this._value = value;
      element.value = value;
    },
  });
}
```

## Key Takeaways

1. defineProperty is really useful and there are lots of code challenges / frontend projects where this _could_ be useful for reactivity.

[&larr; Back](./../README.md)

# Recursion

**Recursion** is a computational approach where a function calls itself from within its body.

Programmers use recursion when they need to perform a similar action multiple times in a row until it reaches a predefined stopping point, also known as a **base case**.

In recursion, the **recursive case** is the condition under which a function calls itself.

_JavaScript Factorial code implementation:_

```js
// Recursive Solution to Factorial
const recursiveFactorial = (n) => {
  if (n === 0) {
    return 1;
  } else if (n > 0) {
    return n * recursiveFactorial(n - 1);
  }
};

// Iterative Solution to Factorial
const iterativeFactorial = (n) => {
  result = 1;
  while (n > 0) {
    result *= n;
    n -= 1;
  }
  return result;
};
```

Two important parts of a recursive function:

1. **Recursive Case:** the conditions under which the function will perform an action and call itself, bringing the function closer to the base case.
2. **Base Case:** the condition under which the recursion stops.

<br>

## Recursive Traversal in a Linked list

```js
class LinkedList {
  findNodeRecursively(data, currentNode = this.head) {
    if (currentNode === null) {
      return null;
    } else if (currentNode.data === data) {
      return currentNode;
    } else {
      return this.findNodeRecursively(data, currentNode.next);
    }
  }
}
```

<br>

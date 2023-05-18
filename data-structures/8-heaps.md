[&larr; Back](./../README.md)

# Heaps

[**Heap (GitHub Repository)**](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/heap)

In computer science, a **heap** is a tree-based data structure, commonly used to create a priority queue.

Heaps are used to maintain a maximum or minimum value in a dataset, known as _max-heaps_ or _min-heaps_.

<br>

## Min-heap

Think of the min-heap as a binary tree with two qualities:

- The root is the **minimum value** of the dataset.
- Every child's value is **greateer than or equal to its parent**.

By maintaining these two properties, we can efficiently retrieve and update the minimum value.

<br>

### Heap Representations

We can picture min-heaps as binary trees, where each node has at most two children.

As we add elements to the heap, they’re added from left to right until we’ve filled the entire level.

Practically, we implement heaps in a sequential data structure like an array or list for efficiency.

<br>

### Adding an Element: Heapify Up

_The children must be larger or equal to their parent._

In case this property is violated, we need to restore the heap's correct order.

This restoration is known as **heapify** or **heapifying**.

**Heapifying up** - adding an element to the bottom of the tree and moving it upwards.

_In practice:_ As long as we’ve violated the heap properties, we’ll swap the offending child with its parent until we restore the properties, or until there’s no parent left. If there is no parent left, that element becomes the new root of the tree.

<!-- ### Removing an Element: Heapify Down -->

<br>

## Heaps in JavaScript

```js
class MinHeap {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }

  popMin() {
    if (this.size === 0) {
      return null;
    }
    const min = this.heap[1];
    this.heap[1] = this.heap[this.size];
    this.heap.pop();
    this.size--;
    this.heapify();
    return min;
  }

  add(value) {
    this.heap.push(value);
    this.size++;
    this.bubbleUp();
  }

  bubbleUp() {
    let current = this.size;
    let swapCount = 0;
    while (current > 1 && this.heap[getParent(current)] > this.heap[current]) {
      this.swap(current, getParent(current));
      current = getParent(current);
      swapCount++;
    }
    if (this.size == 10000) {
      console.log(
        `Heap of ${this.size} elements restored with ${swapCount} swaps`
      );
    }
  }

  heapify() {
    let current = 1;
    let leftChild = getLeft(current);
    let rightChild = getRight(current);
    let swapCount = 0;

    while (this.canSwap(current, leftChild, rightChild)) {
      // Only compare left & right if they both exist
      if (this.exists(leftChild) && this.exists(rightChild)) {
        // Make sure to swap with the smaller of the two children
        if (this.heap[leftChild] < this.heap[rightChild]) {
          this.swap(current, leftChild);
          current = leftChild;
          swapCount++;
        } else {
          this.swap(current, rightChild);
          current = rightChild;
          swapCount++;
        }
      } else {
        // If only one child exist, always swap with the left
        this.swap(current, leftChild);
        current = leftChild;
        swapCount++;
      }
      leftChild = getLeft(current);
      rightChild = getRight(current);
    }
    if (this.size == 9999) {
      console.log(
        `Heap of ${this.size} elements restored with ${swapCount} swaps`
      );
    }
  }

  exists(index) {
    return index <= this.size;
  }

  canSwap(current, leftChild, rightChild) {
    // Check that one of the possible swap conditions exists
    return (
      (this.exists(leftChild) && this.heap[current] > this.heap[leftChild]) ||
      (this.exists(rightChild) && this.heap[current] > this.heap[rightChild])
    );
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

const getParent = (current) => Math.floor(current / 2);
const getLeft = (current) => current * 2;
const getRight = (current) => current * 2 + 1;
```

<br>

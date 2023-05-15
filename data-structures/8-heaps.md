[&larr; Back](./../README.md)

# Heaps

[**Heap (GitHub Repository)**](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/heap)

In computer science, a **heap** is a tree-based data structure.

Heaps are used to maintain a maximum or minimum value in a dataset.

Heaps tracking the maximum or minimum value are _max-heaps_ or _min-heaps_.

Heaps are commonly used to create a priority queue.

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

<br>

### Removing an Element: Heapify Down

<br>

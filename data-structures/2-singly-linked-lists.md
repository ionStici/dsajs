[&larr; Back](./../README.md)

# Singly Linked Lists

- [Linked List (javascript-algorithms repo)](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list)

**Singly Linked Lists** are a linear data structure (unidirectional) where elements are stored in nodes, and each node points to the next node in the sequence.

A **linked list** is comprised of a sequential chain of nodes, where each node contains two items, the _Value_ and the _Reference_ to the next node.

- Linked Lists have a single **head** node, which serves as the first node in the list.
- Then the last node is referred as the **tail**, denoted by the pointer set to `null`.

_Methods a linked list should provide:_

1. ADD new node to the beginning or to the end of the list
2. REMOVE a node from the beginning of the list
3. TRAVERSING the linked list + PRINT out the nodes in order

## Adding a new node to head

Link the new node to the current head node.

## Removing a node

To remove a node, we reset the pointers that point to the node we want to remove, so that it will become an "Orphaned node".

<br>

## Constructor and Methods

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (!(node instanceof Node)) throw new Error();
    this.next = node;
  }

  getNextNode() {
    return this.next;
  }
}
```

```js
class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) this.head.setNextNode(currentHead);
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) return;
    this.head = removedHead.getNextNode();
    return removedHead;
  }

  printList() {
    const currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

const list = new LinkedList();
list.addToHead(2);
list.addToHead(1);
list.addToTail(3);
list.printList(); // 1 2 3
```

<br>

## Swapping Elements in a Linked List

Swap `data1` and `data2` nodes in a linked list.

1. Iterate through the list looking for the nodes that matches `data1` and `data2` to be swapped (`node1` and `node2`). Keep track of the node's previous node as you iterate `node1Prev` and `node2Prev`.
2. If `node1Prev` is `null`, `node1` was the head of the list, so set the list’s head to `node2`
3. Otherwise, set `node1Prev`‘s next node to `node2`
4. If `node2Prev` is `null`, set the list’s head to `node1`
5. Otherwise, set `node2Prev`‘s next node to `node1`
6. Set `node1`‘s next node to `node2`‘s next node
7. Set `node2`‘s next node to `node1`‘s next node

```js
const list = new LinkedList();

for (let i = 0; i <= 10; i++) {
  list.addToTail(i);
}

list.printList();
swapNodes(list, 2, 5);
list.printList();

function swapNodes(list, data1, data2) {
  // Start Swapping
  console.log(`Swapping ${data1} and ${data2}:`);

  let node1Prev = null;
  let node2Prev = null;
  let node1 = list.head;
  let node2 = list.head;

  // return if the two nodes to be swapped are the same
  if (data1 === data2) {
    console.log("Elements are the same - no swap to be made");
    return;
  }

  // Finding the Matching and Preceding Nodes
  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }

  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }

  // return if there is no matching node for one of the inputs
  if (node1 === null || node2 === null) {
    console.log("Swap not possible - one or more element is not in the list");
    return;
  }

  // Updating the Preceding Nodes’ Pointers
  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) {
    list.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }

  // Updating the Nodes’ Next Pointers
  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp);
}
```

<br>

<!-- ## Two-Pointer Linked List Techniques

"runner technique"

[cc](https://www.codecademy.com/journeys/front-end-engineer/paths/fecj-22-interview-prep/tracks/fecj-22-linear-data-structures/modules/wdcp-22-singly-linked-lists-d50f2ced-f53c-476d-92e1-1d1ead5b7bbc/articles/two-pointer-linked-list-techniques)

<br> -->

[&larr; Back](./README.md)

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

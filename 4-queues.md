[&larr; Back](./README.md)

# Queues

A [**Queue**](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue) is a linear collection of nodes that exclusively adds (enqueues) nodes to the tail, and removes (dequeues) nodes from the head of the queue.

A **Queue** is a _first in, first out_ data structure which contains an ordered set of data.

_Queues provide three methods for interaction:_

1. **Enqueue** - adds data to the end (back) of the queue
2. **Dequeue** - provides and removes data from the beginning (front) of the queue
3. **Peek** - reveals data from the beginning (front) of the queue without removing it

<br>

## Implementation

Queues can be implemented using a linked list as the underlying data structure.

The front of the queue is equivalent to the head node, and the back of the queue is equivalent to the tail node.

Operations are only allowed affecting the front or back of the queue, any traversal or modification to other nodes within the linked list are disallowed.

Queues are useful in situations where you need to maintain the order of elements or when you need to process elements in the order they arrive, like task scheduling or handling requests in a server.

<br>

## Bounded queue

**Bounded queue** - a queue with a fixed maximum capacity. It can hold only a limited number of elements, and once it reaches its capacity, it can no longer accept new elements until space is made available by removing elements from the front.

- Attempting to enqueue data onto an already full queue will result in a **queue overflow**.

- If you attempt to dequeue data from an empty queue, it will result in a **queue underflow**.

<br>

## Queues in JavaScript

To build queues we will use the following data structures: _Nodes_ and _Linked Lists_.

<details>
<summary>Node</summary>

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

  setNext(data) {
    this.next = data;
  }

  getNextNode() {
    return this.next;
  }
}
```

<br>

</details>

<details>
<summary>Linked List</summary>

```js
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const nextNode = new Node(data);
    const currentHead = this.head;
    this.head = nextNode;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let lastNode = this.head;
    if (!lastNode) {
      this.head = new Node(data);
    } else {
      let temp = this.head;
      while (temp.getNextNode() !== null) {
        temp = temp.getNextNode();
      }
      temp.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.next;
    }
    output = output.concat("<tail>");
    console.log(output);
  }
}
```

<br>

</details>

<br>

```js
class Queue {
  constructor() {
    this.queue = new LinkedList();
    this.size = 0;
  }
}

const queue = new Queue();
```

<br>

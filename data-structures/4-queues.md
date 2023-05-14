[&larr; Back](./../README.md)

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
```

<br>

## Enqueue

**Enqueue** - _"add to a queue"_.

- The new added node is always added to the end of the queue.
- If the queue is empty, the node we're adding becomes both the head and tail of the queue.
- If the queue has at least one other node, the added node only becomes the new tail.

```js
enqueue(data) {
    this.queue.addToTail(data);
    this.size++;
}
```

<br>

## Dequeue

**Dequeue** - _"remove from a queue"_.

We remove items from the head of the queue.

The `dequeue` methods returns and removes the current head, and replaces it with the following node.

```js
dequeue() {
    const data = this.queue.removeHead();
    this.size--;
    return data;
}
```

<br>

## Bounded Queues

Some queues require limits on the number of nodes they can have, while other queues don’t.

- The `maxSize` property will limit the total node count
- `hasRoom()` returns `true` if the queue has space to add another node
- `isEmpty` returns `true` if the `size` of a queue is `0`

```js
class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  // other methods
}
```

<br>

## Avoiding Underflow

**Underflow** occurs when we try to remove elements from an already empty queue – we cannot remove a node if it doesn’t exist.

Underflow affects queues whether they are bounded or unbounded.

```js
dequeue() {
    if (!this.isEmpty()) {
        const data = this.queue.removeHead();
        this.size--;
        console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
        return data;
    } else {
        throw new Error("Queue is empty!");
    }
}
```

<br>

## Avoiding Overflow

**Overflow** occurs when we add an element to a queue that does not have room for a new node.

This condition affects bounded queues because they have fixed sizes they cannot exceed.

For unbounded queues, though they don’t have a size restriction, at some point the size of the queue will exceed the available memory we can use to store this queue.

```js
enqueue(data) {
    if (this.hasRoom()) {
        this.queue.addToTail(data);
        this.size++;
        console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
    } else {
        throw new Error('Queue is full!');
    }
}
```

<br>

## Final Queue Code

```js
class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList(); // !!!
    this.maxSize = maxSize;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
    } else {
      throw new Error("Queue is full!");
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      return data;
    } else {
      throw new Error("Queue is empty!");
    }
  }
}
```

<br>

## Unbounded Queue Example

Generated by GPT

```js
class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue an element at the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue an element from the front of the queue
  dequeue() {
    if (this.isEmpty()) return;
    return this.items.shift();
  }

  // Get the front element of the queue
  front() {
    if (this.isEmpty()) return;
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }

  // Print the queue
  print() {
    return this.items.toString();
  }
}

const queue = new Queue();
```

<br>

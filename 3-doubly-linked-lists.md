# Doubly Linked Lists

[Doubly Linked List (GitHub Repo)](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/doubly-linked-list)

Doubly Linked Lists are a linear data structure (an extension of the singly linked list).

This bidirectional structure allows for efficient traversal in both forward and backward directions.

A **doubly linked list** is comprised of a series of nodes.

Each node contains DATA and TWO LINKS (or pointers) to the next and previous nodes in the list.

The head node is the node at the beginning of the list, and the tail node is the node at the end of the list.

The head node’s previous pointer is set to `null` and the tail node’s next pointer is set to `null`.

Common operations on a doubly linked list may include:

- adding nodes to both ends of the list
- removing nodes from both ends of the list
- finding, and removing, a node from anywhere in the list
- traversing (or traveling through) the list

<br>

## Adding to the List

### Adding to the Head

- **if** the there isn't a current head, then the list is empty, and we can simply make our new node both the head and tail of the list and set both pointers to null.

- **if** the list is not empty..

  1. Set the current head’s previous pointer to our new head
  2. Set the new head’s next pointer to the current head
  3. Set the new head’s previous pointer to null

### Adding to the Tail

- **if** the list is empty, then we make the new node the head and tail of the list and set the pointers to `null`.

- **if** the list is not empty..

  1. Set the current tail’s next pointer to the new tail
  2. Set the new tail’s previous pointer to the current tail
  3. Set the new tail’s next pointer to `null`

<br>

## Removing from the Head and Tail

### Removing the Head

- Set the previous pointer of the element directly after the current head to `null`, and update the head property of the list.

- If the head was also the tail, the tail removal process will occur as well.

### Removing the Tail

- Set the next pointer of the element directly before the tail to `null`, and update the tail property of the list.

- If the tail was also the head, the head removal process will occur as well.

<br>

## Removing from the Middle of the List

Two pointers that must be updated:

- Set the removed node’s preceding node’s next pointer to its following node

- Set the removed node’s following node’s previous pointer to its preceding node

There is no need to change the pointers of the removed node, as updating the pointers of its neighboring nodes will remove it from the list. If no nodes in the list are pointing to it, the node is orphaned.

<br>

## Node Class and Constructor

A Doubly Linked List is a sequential chain of nodes.

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    }
  }

  setPrevNode(node) {
    if (node instanceof Node || node === null) {
      this.prev = node;
    }
  }

  getNextNode() {
    return this.next;
  }

  getPrevNode() {
    return this.prev;
  }
}
```

```js
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // other methods

  printList() {
    let currentNode = this.head;
    let output = "<head> ";

    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }

    output += "<tail>";
    console.log(output);
  }

  getSize() {
    return this.size;
  }
}
```

<br>

## Add to Head

```js
addToHead(data) {
    const newHead = new Node(data)
    const currentHead = this.head;

    if (currentHead) {
        currentHead.setPrevNode(newHead);
        newHead.setNextNode(currentHead)
    }

    if (!currentHead) this.tail = newHead;

    this.head = newHead;
    this.size++;
}
```

<br>

## Add to Tail

```js
addToTail(data) {
    const currentTail = this.tail;
    const newTail = new Node(data);

    if (currentTail) {
        currentTail.setNextNode(newTail);
        newTail.setPrevNode(currentTail);
    }

    if (!currentTail) this.head = newTail;

    this.tail = newTail;
    this.size++;
}
```

<br>

## Remove Head

```js
removeHead() {
    const removedHead = this.head;
    if (!removedHead) return;

    this.head = removedHead.getNextNode();
    if (this.head) this.head.setPrevNode(null);
    if (removedHead === this.tail) this.removeTail();

    this.size--;
    return removedHead;
}
```

<br>

## Remove Tail

```js
removeTail() {
    const removedTail = this.tail;
    if (!removedTail) return;

    this.tail = removedTail.getPrevNode();
    if (this.tail) this.tail.setNextNode(null);
    if (removedTail === this.head) this.removeHead();

    this.size--;
    return removedTail;
}
```

<br>

## Remove By Data

- Iterate through the list to find the matching node
- If there is no matching element then return `null`.
- If there is a matching node, first check if it is the head or tail of the list:
  - If so, then call the corresponding `removeHead` or `removeTail` method.
- If not, remove the node by setting the pointers of its previous and next nodes.

```js
removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;

    while (currentNode !== null) {
        if (currentNode.data === data) {
            nodeToRemove = currentNode;
            break;
        }
        currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) return null;

    if (nodeToRemove === this.head) {
        this.removeHead();
    } else if (nodeToRemove === this.tail) {
        this.removeTail();
    } else {
        const prevNode = nodeToRemove.getPrevNode();
        const nextNode = nodeToRemove.getNextNode();

        prevNode.setNextNode(nextNode);
        nextNode.setPrevNode(prevNode);
    }

    this.size--;
    return nodeToRemove;
}
```

<br>

## Using the Doubly Linked List

```js
const subway = new DoublyLinkedList();
subway.addToHead("TimesSquare");
subway.addToHead("GrandCentral");
subway.addToHead("CentralPark");
subway.printList();

subway.addToTail("PennStation");
subway.addToTail("WallStreet");
subway.addToTail("BrooklynBridge");
subway.printList();

subway.removeHead();
subway.removeTail();
subway.printList();

subway.removeByData("TimesSquare");
subway.printList();

// <head> CentralPark GrandCentral TimesSquare <tail>
// <head> CentralPark GrandCentral TimesSquare PennStation WallStreet BrooklynBridge <tail>
// <head> GrandCentral TimesSquare PennStation WallStreet <tail>
// <head> GrandCentral PennStation WallStreet <tail>
```

<br>

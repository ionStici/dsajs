[&larr; Back](./../README.md)

# Nodes

A **Node** is a basic building block that contains some data (value) and a reference (pointer) to the next node in the sequence.

By connecting nodes in this way, you can form a linear structure where elements are linked to one another.

In JavaScript, nodes can be used to create linear data structures like linked lists.

- An individual node contains: a **value** and a **reference** to other node.

- If the **reference** is `null`, it denotes the end of the node structure.

- Term: "Orphaned node" refers to a node with no exisitng link to it.

- When you create and connect multiple nodes, you form a linear data structure.

```js
// Example of a Node class in JavaScript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  setNextNode(node) {
    // Validation
    if (node instanceof Node || node === null) this.next = node;
  }

  getNextNode() {
    return this.next;
  }
}

// Create three nodes
const node_1 = new Node(1);
const node_2 = new Node(2);
const node_3 = new Node(3);

// Connect the nodes in sequence
node_1.setNextNode(node_2);
node_2.setNextNode(node_3);

// Traversing the linear structure
let current_Node = node_1;
while (current_Node !== null) {
  console.log(current_Node.value);
  current_Node = current_Node.next;
}
```

<br>

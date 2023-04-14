# Nodes

A **Node** is a basic building block that contains some data (value) and a reference to the next node in the sequence.

By connecting nodes in this way, you can form a linear structure where elements are linked to one another.

In JavaScript, nodes can be used to create linear data structures like linked lists.

```js
// example of a Node class in JS
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Create three nodes with values 1, 2, and 3
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

// Connect the nodes in the sequence 1 -> 2 -> 3
node1.next = node2;
node2.next = node3;

// Traversing the linear structure
let currentNode = node1;
while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
}
```

-   An individual node contains: a **value** and a **reference** to other node.
-   If the **reference** is null, it denotes the end of the node structure.
-   Term: "Orphaned node" refers to a node with no exisitng link to it.
-   When you create and connect multiple nodes, you form a linear data structure.

<br>

## More strict example

```js
class strict_node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    setNextNode(node) {
        // Validation: so that the next node will not accidentally get set to a different data type
        if (node instanceof strict_node || node === null) this.next = node;
    }

    getNextNode() {
        return this.next;
    }
}

const node_1 = new strict_node(1);
const node_2 = new strict_node(2);
const node_3 = new strict_node(3);

node_1.setNextNode(node_2);
node_2.setNextNode(node_3);

let current_Node = node_1;
while (current_Node !== null) {
    console.log(current_Node.value);
    current_Node = current_Node.next;
}
```

<br>

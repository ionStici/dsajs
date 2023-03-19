// 1. An individual node contains: DATA and LINKS to other nodes.
// 2. If the link is "null", it denotes the end of the node.
// 3. Term: "Orphaned node" - node with no exisitng link to it.

// ONE WAY nodes can be implemented using JavaScript:

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node) {
        // Validation: so that the next node will not accidentally get set to a different data type
        if (node instanceof Node || node === null) this.next = node;
    }

    getNextNode() {
        return this.next;
    }
}

const node_1 = new Node(1);
const node_2 = new Node(2);
const node_3 = new Node(3);
const node_4 = new Node(4);

node_1.setNextNode(node_2);
node_2.setNextNode(node_3);
node_3.setNextNode(node_4);

// console.log(node_1.next.next.next.next);
// console.log(node_1);

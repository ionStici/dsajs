// // // // // // // // // // // // // // //
// // // // // // // // // // // // // // //
// // // // // // // // // // // // // // //
// // // // // // // NODE // // // // // ///

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

// // // // // // // // // // // // // // //
// // // // // // // // // // // // // // //
// // // // // // // // // // // // // // //
// // // // // LINKED LIST // // // // // //

// 1. Linked Lists: comprised of nodes & a sequential chain of nodes.
// 2. A node contains two elements: DATA + a LINK to the next node
// 3. Linked Lists have a single head node, which serves as the first node in the list.

// Depending on the end-use of the linked list, there are a variety of methods that we can define. For our use, we want to be able to:
// ADD new node to the beginning (head) of the list
// ADD new node to the end (tail) of the list
// remove a node from the beginning (head) of the list
// print out the nodes in the list in order from head to tail

// // // // // // // // // // // // // // //

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
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
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        return removedHead.data;
    }

    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }
}

// // // // // // // // // // // // // // //

const weekDays = new LinkedList();
weekDays.printList();

weekDays.addToTail('wednesday');
weekDays.addToTail('thursday');
weekDays.addToTail('friday');
weekDays.printList();

weekDays.addToHead('tuesday');
weekDays.addToHead('monday');
weekDays.printList();

weekDays.addToTail('saturday');
weekDays.addToTail('sunday');
weekDays.printList();

// // // // // // // // // // // // // // //
// // // // // // // // // // // // // // //
// // // // // // // // // // // // // // //

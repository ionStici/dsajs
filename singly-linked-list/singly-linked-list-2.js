class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }

        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;

            this.length++;
        }
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }

        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }

    print() {
        let currentNode = this.head;
        let output = 'HEAD ';

        while (currentNode.next !== null) {
            output += currentNode.value + ' ';
            currentNode = currentNode.next;
        }
        output += 'TAIL';

        console.log(output);
    }
}

const list = new LinkedList();

list.prepend(2);
list.prepend(1);
list.append(3);
list.append(5);

list.print();

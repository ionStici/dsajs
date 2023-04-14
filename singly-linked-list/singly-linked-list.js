class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(value) {
        const newHead = new Node(value);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) this.head.next = currentHead;
    }

    addToTail(value) {
        let tail = this.head;
        if (!tail) this.head = new Node(value);

        if (tail) {
            while (tail.next !== null) tail = tail.next;
            tail.next = new Node(value);
        }
    }

    removeHead() {
        const removeHead = this.head;
        if (!removeHead) return;
        this.head = removeHead.next;
    }

    print() {
        let currentNode = this.head;
        let output = '<head> ';

        while (currentNode !== null) {
            output += currentNode.value + ' ';
            currentNode = currentNode.next;
        }

        output += '<tail>';
        console.log(output);
    }

    length() {
        let length = 0;
        let head = this.head;
        while (head.next !== null) {
            length++;
            head = head.next;
        }
        length++;
        return length;
    }
}

const list = new LinkedList();
list.addToHead(1);
list.addToTail(2);
list.addToTail(3);

list.length();
list.print();

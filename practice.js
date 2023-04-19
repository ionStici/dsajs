// // // // // // // // // // // // // // // // // // // //

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    }
  }

  getNextNode() {
    return this.next;
  }
}

// // // // // // // // // // // // // // // // // // // //

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newNode = new Node(data);
    const currentHead = this.head;
    if (currentHead) newNode.setNextNode(currentHead);
    this.head = newNode;
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
    let removedHead = this.head;
    if (!removedHead) return;
    this.head = removedHead.getNextNode();
    return removedHead;
  }

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
}

// // // // // // // // // // // // // // // // // // // //

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

  enqueue(data) {
    if (!this.hasRoom()) return;
    this.queue.addToTail(data);
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const data = this.queue.removeHead();
    this.size--;
    return data;
  }
}

// // // // // // // // // // // // // // // // // // // //

const queue = new Queue(3);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

// // // // // // // // // // // // // // // // // // // //

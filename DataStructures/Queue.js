class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.first === null) return null;
    let firstNode = this.first;
    this.first = this.first.next;
    if (this.first === this.last) this.last = null;
    this.size--;
    return firstNode.val;
  }
}

module.exports = Queue;
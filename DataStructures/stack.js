class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  pop() {
    if (this.first === null) return null;
    let node = this.first;
    this.first = this.first.next;
    if (this.first === this.last) this.last = null;
    this.size--;
    return node.val;
  }
}

module.exports = Stack;
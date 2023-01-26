class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.head === null) return undefined;
    let temp = this.tail.val;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    }
    let thisNode = this.head;
    while (thisNode.next) {
      if (thisNode.next === this.tail) {
        this.tail = thisNode;
        this.tail.next = null;
        break;
      }
      thisNode = thisNode.next;
    }
    this.length--;
    return temp;
  }

  shift() {
    if (this.head === null) return undefined;
    let temp = this.head.val;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return temp;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index > this.length - 1 || index < 0) return null;
    let thisNode = this.head;
    for (let i = 0; i < index; i++) {
      thisNode = thisNode.next;
    }
    return thisNode;
  }

  set(idx, val) {
    let thisNode = this.get(idx);
    if (thisNode !== null) {
      thisNode.val = val;
      return true;
    }
    return false;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    let thisNode = this.get(idx - 1);
    let newNode = new Node(val);
    let temp = thisNode.next;
    thisNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length - 1) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let prev = this.head;
    for (let i = 0; i < idx - 1; i++) {
      prev = prev.next;
    }
    let removed = prev.next.val;
    let newNext = prev.next.next;
    prev.next = newNext;
    this.length--;
    return removed;
  }

  reverse() {
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;
    let prev = null;
    let next = true;
    while (next) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return this;
  };

  reverse_v1() {
    if (this.head === null || this.head === this.tail) return this;
    let temp = this.tail;
    this.tail = this.head;
    let curr = this.head;
    let next = curr.next;
    this.tail.next = null;
    this.head = temp;
    while (next) {
      let tempNext = next.next;
      next.next = curr;
      curr = next;
      next = tempNext;
    }
    return this;
  }


}

module.exports = singlyLinkedList;
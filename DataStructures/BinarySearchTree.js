class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currNode = this.root;
    while (true) {
      if (val === currNode.value) return undefined;
      if (val > currNode.value) {
        if (currNode.right === null) {
          currNode.right = newNode;
          return this;
        }
        currNode = currNode.right;
      } else {
        if (currNode.left === null) {
          currNode.left = newNode;
          return this;
        }
        currNode = currNode.left;
      }
    }
  }

  find(val) {
    if (this.root === null) return false;
    let currNode = this.root;
    while(currNode) {
      if (currNode.value === val) return currNode;
      if (currNode.value > val) currNode = currNode.left;
      else currNode = currNode.right;
    }
    return false;
  }
}

module.exports = BinarySearchTree;
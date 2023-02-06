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
    while (currNode) {
      if (currNode.value === val) return currNode;
      if (currNode.value > val) currNode = currNode.left;
      else currNode = currNode.right;
    }
    return false;
  }
  BFS() {
    if (this.root === null) return null;
    let nodeQueue = [this.root];
    let result = [];
    while (nodeQueue.length) {
      let thisNode = nodeQueue.shift();
      result.push(thisNode.value);
      if (thisNode.left) nodeQueue.push(thisNode.left);
      if (thisNode.right) nodeQueue.push(thisNode.right);
    }
    return result;
  }

  DFS_PreOrder() {
    let results = [];
    function search(node) {
      results.push(node.value);
      if (node.left) search(node.left);
      if (node.right) search(node.right);
    };
    search(this.root);
    return results;
  };
  DFS_PostOrder() {
    let results = [];
    function search(node) {
      if (node.left) search(node.left);
      if (node.right) search(node.right);
      results.push(node.value);
    };
    search(this.root);
    return results;
  };

  DFS_InOrder() {
    let results = [];
    function search(node) {
      if (node.left) search(node.left);
      results.push(node.value);
      if (node.right) search(node.right);
    };
    search(this.root);
    return results;
  }
};

module.exports = BinarySearchTree;
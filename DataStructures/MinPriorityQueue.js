class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class MinPriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.values.push(node);
    let idx = this.values.length - 1;
    let parentIdx = this._getParentIdx(idx);
    while (parentIdx >= 0 && this.values[parentIdx].priority > this.values[idx].priority) {
      this.values[idx] = this.values[parentIdx];
      this.values[parentIdx] = node;
      idx = parentIdx;
      parentIdx = this._getParentIdx(idx);
    };
    return node;
  }

  dequeue() {
    if (this.values.length === 1) return this.values.pop();
    let top = this.values[0];
    this.values[0] = this.values.pop();
    let idx = 0;
    while (idx < this.values.length) {
      let [childIdx1, childIdx2] = this._getChildrenIdx(idx);
      if ((this.values[childIdx1] && this.values[childIdx1].priority < this.values[idx].priority) ||
        (this.values[childIdx2] && this.values[childIdx2].priority < this.values[idx].priority)) {
        if (this.values[childIdx2] === undefined || this.values[childIdx1].priority <= this.values[childIdx2].priority) {
          this._swap(idx, childIdx1);
          idx = childIdx1;

        } else {
          this._swap(idx, childIdx2);
          idx = childIdx2;
        }
      } else {
        return top;
      }
    }
  };

  _getParentIdx(n) {
    return Math.floor((n - 1) / 2);
  };

  _getChildrenIdx(n) {
    return [2 * n + 1, 2 * n + 2]
  }

  _swap(idx1, idx2) {
    let temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }
}

module.exports = MinPriorityQueue;
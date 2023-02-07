class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    let idx = this.values.length - 1;
    let parentIdx = this.getParent(idx);
    while (this.values[idx] > this.values[parentIdx]) {
      this.values[idx] = this.values[parentIdx];
      this.values[parentIdx] = val;
      idx = parentIdx;
      parentIdx = this.getParent(idx);
    }
    return val;
  }

  extractMax() {
    if (this.values.length === 1) return this.values.pop();
    let max = this.values[0];
    let idx = 0;
    this.values[idx] = this.values.pop();
    while (true) {
      let [childIdx1, childIdx2] = this.getChildren(idx);
      if (childIdx1 > this.values.length - 1 && childIdx2 > this.values.length - 1) break;
      if (this.values[childIdx1] > this.values[idx] ||
        this.values[childIdx2] > this.values[idx]) {
        if (this.values[childIdx1] > this.values[childIdx2]) {
          this.swap(idx, childIdx1);
          idx = childIdx1;
        } else {
          this.swap(idx, childIdx2);
          idx = childIdx2;
        }
      } else {
        break;
      }
    }
    return max;
  }

  getParent(n) {
    return Math.floor((n - 1) / 2);
  }
  getChildren(n) {
    return [2*n + 1, 2*n + 2];
  }

  swap(idx1, idx2) {
    let temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }
}

module.exports = MaxBinaryHeap;
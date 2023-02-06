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

  getParent(n) {
    return Math.floor((n - 1) / 2);
  }
}

module.exports = MaxBinaryHeap;
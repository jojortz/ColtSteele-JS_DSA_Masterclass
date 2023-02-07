const MaxBinaryHeap = require("../../DataStructures/MaxBinaryHeap");

let vals = [41, 12, 33, 27, 18, 39];

describe('MaxBinaryHeap', () => {
  let maxHeap;

  beforeEach(() => {
    maxHeap = new MaxBinaryHeap();
    vals.forEach((val) => {
      maxHeap.insert(val);
    })
  });

  test('It should insert properly', () => {
    expect(maxHeap.values).toEqual([41, 27, 39, 12, 18, 33]);
    expect(maxHeap.insert(55)).toBe(55);
    expect(maxHeap.values).toEqual([55, 27, 41, 12, 18, 33, 39]);
    expect(maxHeap.insert(60)).toBe(60);
    expect(maxHeap.values).toEqual([60, 55, 41, 27, 18, 33, 39, 12]);
    expect(maxHeap.insert(-1)).toBe(-1);
    expect(maxHeap.values).toEqual([60, 55, 41, 27, 18, 33, 39, 12, -1]);

  });

  test('It should extract the max', () => {
    maxHeap.insert(55);
    maxHeap.insert(60);
    expect(maxHeap.extractMax()).toBe(60);
    expect(maxHeap.values).toEqual([55, 27, 41, 12, 18, 33, 39]);
    expect(maxHeap.extractMax()).toBe(55);
    expect(maxHeap.values).toEqual([41, 27, 39, 12, 18, 33]);
    expect(maxHeap.extractMax()).toBe(41);
    expect(maxHeap.values).toEqual([39, 27, 33, 12, 18]);
    expect(maxHeap.extractMax()).toBe(39);
    expect(maxHeap.values).toEqual([33, 27, 18, 12]);
    expect(maxHeap.extractMax()).toBe(33);
    expect(maxHeap.values).toEqual([27, 12, 18]);
    expect(maxHeap.extractMax()).toBe(27);
    expect(maxHeap.values).toEqual([18, 12]);
    expect(maxHeap.extractMax()).toBe(18);
    expect(maxHeap.values).toEqual([12]);
    expect(maxHeap.extractMax()).toBe(12);
    expect(maxHeap.values).toEqual([]);
  })

})
const radixSort = require("../../SortingAlgorithms/radixSort");

const examples = [
  {
    input: [5, 4, 2, 1, 3],
    expected: [1, 2, 3, 4, 5]
  },
  {
    input: [5, 4, 2, 1, 3, 99, 98, 76],
    expected: [1, 2, 3, 4, 5, 76, 98, 99]
  },
  {
    input: [2, 1, 9, 76, 4],
    expected: [1, 2, 4, 9, 76]
  },
  {
    input: [12345, 1, 3, 2, 6, 4, 112, 4356, 4355, 5748, 9, 76, 1235],
    expected: [1, 2, 3, 4, 6, 9, 76, 112, 1235, 4355, 4356, 5748, 12345]
  },
];

describe("radixSort", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(radixSort(example.input)).toEqual(example.expected);
    });
  });
});
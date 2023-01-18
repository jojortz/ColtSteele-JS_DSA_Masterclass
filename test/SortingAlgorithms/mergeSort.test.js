const { mergeSort, mergeArr } = require("../../SortingAlgorithms/mergeSort");

const examples = [
  {
    input: [5, 4, 2, 1, 3],
    expected: [1, 2, 3, 4, 5]
  },
  {
    input: [5, 4, 2, 1, 3, -1, 99, 98, 76],
    expected: [-1, 1, 2, 3, 4, 5, 76, 98, 99]
  },
  {
    input: [2, 1, 9, 76, 4],
    expected: [1, 2, 4, 9, 76]
  },
  {
    input: [1, 3, 2, 6, 4, 9, 76, -1],
    expected: [-1, 1, 2, 3, 4, 6, 9, 76]
  },
];

const mergeArrExamples = [
  {
    input: [[1, 3, 5, 7], [2, 4, 6, 8, 9, 10]],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    input: [[1, 3, 5, 7, 9, 10], [2, 4, 6, 8]],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    input: [[], [2, 4]],
    expected: [2, 4]
  },
  {
    input: [[1, 3], []],
    expected: [1, 3]
  },
  {
    input: [[1], [-1]],
    expected: [-1, 1]
  },
];

describe("mergeSort", () => {
  mergeArrExamples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(mergeArr(...example.input)).toEqual(example.expected);
    });
  });
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(mergeSort(example.input)).toEqual(example.expected);
    });
  });
});
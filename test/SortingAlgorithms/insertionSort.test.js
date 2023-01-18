const selectionSort = require("../../SortingAlgorithms/selectionSort");

let examples = [
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

describe("selectionSort", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(selectionSort(example.input)).toEqual(example.expected);
    });
  });
});
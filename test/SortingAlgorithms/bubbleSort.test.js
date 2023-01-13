const bubbleSort = require("../../SortingAlgorithms/bubbleSort");

const examples = [
  {
    input: [5, 4, 2, 1, 3],
    expected: [1, 2, 3, 4, 5]
  },
  {
    input: [5, 4, 2, 1, 3, -1, 99, 98, 76],
    expected: [-1, 1, 2, 3, 4, 5, 76, 98, 99]
  },
]

describe("bubbleSort", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(bubbleSort(example.input)).toEqual(example.expected);
    });
  });
});
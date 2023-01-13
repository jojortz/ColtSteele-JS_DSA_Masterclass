const binarySearch = require("../../SearchingAlgorithms/binarySearch");

const examples = [
  {
    input: [[-22, 1, 3, 4, 5, 6, 10], 5],
    expected: 4
  },
  {
    input: [[
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 10],
    expected: 2
  },
  {
    input: [[
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 95],
    expected: 16
  },
  {
    input: [[
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 100],
    expected: -1
  },
]

describe("binarySearch", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(binarySearch(...example.input)).toBe(example.expected);
    });
  });
});
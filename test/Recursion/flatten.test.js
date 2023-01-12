const flatten = require("../../Recursion/flatten");

const isOdd = val => val % 2 !== 0;

const examples = [
  {
    input: [[1,2,3, [4, 5]]],
    expected: [1, 2, 3, 4, 5]
  },
  {
    input: [[1, [2, [3, 4], [[5]]]]],
    expected: [1, 2, 3, 4, 5]
  },
  {
    input: [[[1],[2],[3]]],
    expected: [1, 2, 3]
  },
  {
    input: [[[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]],
    expected: [1, 2, 3]
  },
]

describe("flatten", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(flatten(...example.input)).toEqual(example.expected);
    });
  });
});
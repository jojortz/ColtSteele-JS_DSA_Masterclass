const someRecursive = require("../../Recursion/someRecursive");

const isOdd = val => val % 2 !== 0;

const examples = [
  {
    input: [[1,2,3,4], isOdd],
    expected: true
  },
  {
    input: [[8,2,6,4], isOdd],
    expected: false
  },
  {
    input: [[8,2,6,4, 9], isOdd],
    expected: true
  },
]

describe("someRecursive", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(someRecursive(...example.input)).toBe(example.expected);
    });
  });
});
const recursiveRange = require("../../Recursion/recursiveRange");

const examples = [
  {
    input: [6],
    expected: 21
  },
  {
    input: [10],
    expected: 55
  },
  {
    input: [1],
    expected: 1
  },
  {
    input: [0],
    expected: 0
  },
]

describe("recursiveRange", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(recursiveRange(...example.input)).toBe(example.expected);
    });
  });
});
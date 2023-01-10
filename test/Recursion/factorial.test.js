const factorial = require("../../Recursion/factorial");

const examples = [
  {
    input: [1],
    expected: 1
  },
  {
    input: [2],
    expected: 2
  },
  {
    input: [7],
    expected: 5040
  },
  {
    input: [0],
    expected: 1
  },
]

describe("factorial", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(factorial(...example.input)).toBe(example.expected);
    });
  });
});
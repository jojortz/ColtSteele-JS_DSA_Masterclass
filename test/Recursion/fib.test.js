const fib = require("../../Recursion/fib");

const examples = [
  {
    input: [35],
    expected: 9227465
  },
  {
    input: [10],
    expected: 55
  },
  {
    input: [4],
    expected: 3
  },
  {
    input: [28],
    expected: 317811
  },
]

describe("fib", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(fib(...example.input)).toBe(example.expected);
    });
  });
});
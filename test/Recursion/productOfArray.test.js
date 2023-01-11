const productOfArray = require("../../Recursion/productOfArray");

const examples = [
  {
    input: [1, 2, 3],
    expected: 6
  },
  {
    input: [1, 2, 3, 7],
    expected: 42
  },
  {
    input: [1, -2, 3, 7],
    expected: -42
  },
  {
    input: [1, 2, 3, 7, 0],
    expected: 0
  },
]

describe("productOfArray", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(productOfArray(example.input)).toBe(example.expected);
    });
  });
});
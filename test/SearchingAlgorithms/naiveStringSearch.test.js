const naiveStringSearch = require("../../SearchingAlgorithms/naiveStringSearch");

const examples = [
  {
    input: ['carccartoocar', 'car'],
    expected: 3
  },
  {
    input: ['carccartoocar', 'rto'],
    expected: 1
  },
]

describe("naiveStringSearch", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(naiveStringSearch(...example.input)).toBe(example.expected);
    });
  });
});
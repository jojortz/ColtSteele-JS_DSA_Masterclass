const maxSubarraySum = require("../../ProblemSolvingPatterns/SlidingWindow/maxSubarraySum");

const examples = [
  {
    input: [[1, 2, 5, 2, 8, 1, 5], 2],
    expected: 10
  },
  {
    input: [[1, 2, 5, 2, 8, 1, 5], 4],
    expected: 17
  },
  {
    input: [[4, 2, 1, 6], 1],
    expected: 6
  },
  {
    input: [[4, 2, 1, 6, 2], 4],
    expected: 13
  },
  {
    input: [[], 6],
    expected: null
  },
]

describe("maxSubarraySum", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(maxSubarraySum(...example.input)).toBe(example.expected);
    });
  });
});
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
    input: [[100,200,300,400], 2],
    expected: 700
  },
  {
    input: [[3,-2,7,-4,1,-1,4,-2,1],2],
    expected: 5
  },
  {
    input: [[2, 3], 3],
    expected: null
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
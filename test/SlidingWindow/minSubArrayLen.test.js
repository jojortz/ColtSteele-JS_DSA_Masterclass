const minSubArrayLen = require("../../ProblemSolvingPatterns/SlidingWindow/minSubArrayLen");

const examples = [
  {
    input: [[2,3,1,2,4,3], 7],
    expected: 2
  },
  {
    input: [[2,1,6,5,4], 9],
    expected: 2
  },
  {
    input: [[3,1,7,11,2,9,8,21,62,33,19], 52],
    expected: 1
  },
  {
    input: [[1,4,16,22,5,7,8,9,10],55],
    expected: 5
  },
  {
    input: [[1,4,16,22,5,7,8,9,10],95],
    expected: 0
  },
]

describe("minSubArrayLen", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(minSubArrayLen(...example.input)).toBe(example.expected);
    });
  });
});
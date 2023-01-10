const averagePair = require("../../ProblemSolvingPatterns/multiplePointers/averagePair");

const examples = [
  {
    input: [[1,2,3],2.5],
    expected: true
  },
  {
    input: [[1,3,3,5,6,7,10,12,19],8],
    expected: true
  },
  {
    input: [[-1,0,3,4,5,6], 4.1],
    expected: false
  },
  {
    input: [[],4],
    expected: false
  },
]

describe("averagePair", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(averagePair(...example.input)).toBe(example.expected);
    });
  });
});
const countUniqueValues = require("../ProblemSolvingPatterns/MultiplePointers/countUniqueValues");

const examples = [
  {
    input: [1, 1, 1, 2],
    expected: 2
  },
  {
    input: [1, 2, 3, 4, 4, 7, 7, 12, 12, 13],
    expected: 7
  },
  {
    input: [],
    expected: 0
  },
  {
    input: [1],
    expected: 1
  },
  {
    input: [1, 1],
    expected: 1
  },
  {
    input: [1, 4],
    expected: 2
  },
  {
    input: [1],
    expected: 1
  },
  {
    input: [-4, -3, -3, 0, 1],
    expected: 4
  },
]

describe("countUniqueValues", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(countUniqueValues(example.input)).toBe(example.expected);
    });
  });
});
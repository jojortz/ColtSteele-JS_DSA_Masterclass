const areThereDuplicates = require("../../ProblemSolvingPatterns/FrequencyCounter/areThereDuplicates");

const examples = [
  {
    input: [1, 2, 3],
    expected: false
  },
  {
    input: [1, 2, 2],
    expected: true
  },
  {
    input: ['a', 'b', 'c'],
    expected: false
  },
  {
    input: ['a', 'b', 'c', 'b'],
    expected: true
  },
]

describe("areThereDuplicates", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(areThereDuplicates(...example.input)).toBe(example.expected);
    });
  });
});
const findLongestSubstring = require("../../ProblemSolvingPatterns/SlidingWindow/findLongestSubstring");

const examples = [
  {
    input: "",
    expected: 0
  },
  {
    input: 'rithmschool',
    expected: 7
  },
  {
    input: 'thisisawesome',
    expected: 6
  },
  {
    input: 'thecatinthehat',
    expected: 7
  },
  {
    input: 'bbbbbbbbbbb',
    expected: 1
  },
]

describe("findLongestSubstring", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(findLongestSubstring(example.input)).toBe(example.expected);
    });
  });
});
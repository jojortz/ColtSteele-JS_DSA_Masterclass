const isSubsequence = require("../../ProblemSolvingPatterns/multiplePointers/isSubsequence");

const examples = [
  {
    input: ['hello', 'hello world'],
    expected: true
  },
  {
    input: ['sing', 'sting'],
    expected: true
  },
  {
    input: ['abc', 'abracadabra'],
    expected: true
  },
  {
    input: ['abc', 'acb'],
    expected: false
  },
]

describe("isSubsequence", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(isSubsequence(...example.input)).toBe(example.expected);
    });
  });
});
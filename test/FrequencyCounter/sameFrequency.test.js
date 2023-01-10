const sameFrequency = require("../../ProblemSolvingPatterns/FrequencyCounter/sameFrequency");

const examples = [
  {
    input: [182, 281],
    expected: true
  },
  {
    input: [34, 14],
    expected: false
  },
  {
    input: [3589578, 5879385],
    expected: true
  },
  {
    input: [2222, 222],
    expected: false
  },
]

describe("sameFrequency", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(sameFrequency(...example.input)).toBe(example.expected);
    });
  });
});
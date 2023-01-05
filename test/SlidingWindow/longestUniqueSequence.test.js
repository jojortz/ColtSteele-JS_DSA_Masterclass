const longestUniqueSequence = require("../../ProblemSolvingPatterns/SlidingWindow/longestUniqueSequence");

const examples = [
  {
    input: "hellothere",
    expected: "lother"
  },
  {
    input: "",
    expected: ""
  }
]

describe("longestUniqueSequence", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(longestUniqueSequence(example.input)).toBe(example.expected);
    });
  });
});
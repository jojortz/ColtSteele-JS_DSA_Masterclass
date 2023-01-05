const sumZero = require("../../ProblemSolvingPatterns/MultiplePointers/sumZero");

const examples = [
  {
    input: [-3, -2, -1, 0, 1, 2, 3],
    expected: [-3, 3]
  },
  {
    input: [-2, 0 , 1, 3],
    expected: undefined
  },
  {
    input: [1, 2, 3],
    expected: undefined
  },
  {
    input: [-4, -3, -2, -1, 0, 1, 2, 5, 6],
    expected: [-2, 2]
  },
]

describe("sumZero", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(sumZero(example.input)).toEqual(example.expected);
    });
  });
});
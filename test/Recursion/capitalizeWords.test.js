const capitalizeWords = require("../../Recursion/capitalizeWords");

const examples = [
  {
    input: ['car','taco','banana'],
    expected: ['CAR', 'TACO', 'BANANA']
  },
  {
    input: ['', ''],
    expected: ['', '']
  },
  {
    input: [],
    expected: []
  },
]

describe("capitalizeWords", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(capitalizeWords(example.input)).toEqual(example.expected);
    });
  });
});
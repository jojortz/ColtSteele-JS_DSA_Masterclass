const linearSearch = require("../../SearchingAlgorithms/linearSearch");

const examples = [
  {
    input: [['car','taco','banana'], 'car'],
    expected: 0
  },
  {
    input: [['car','taco','banana'], 'banana'],
    expected: 2
  },
  {
    input: [['car','taco','banana'], 'dog'],
    expected: -1
  },
]

describe("linearSearch", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(linearSearch(...example.input)).toBe(example.expected);
    });
  });
});
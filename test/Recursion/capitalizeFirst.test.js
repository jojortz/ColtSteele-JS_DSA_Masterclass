const capitalizeFirst = require("../../Recursion/capitalizeFirst");

const examples = [
  {
    input: ['car','taco','banana'],
    expected: ['Car', 'Taco', 'Banana']
  },
]

describe("capitalizeFirst", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(capitalizeFirst(example.input)).toEqual(example.expected);
    });
  });
});
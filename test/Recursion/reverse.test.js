const reverse = require("../../Recursion/reverse");

const examples = [
  {
    input: ['awesome'],
    expected: 'emosewa'
  },
  {
    input: ['rithmschool'],
    expected: 'loohcsmhtir'
  },
  {
    input: [''],
    expected: ''
  },
]

describe("reverse", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(reverse(...example.input)).toBe(example.expected);
    });
  });
});
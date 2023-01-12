const isPalindrome = require("../../Recursion/isPalindrome");

const examples = [
  {
    input: ['awesome'],
    expected: false
  },
  {
    input: ['tacocat'],
    expected: true
  },
  {
    input: ['boooob'],
    expected: true
  },
  {
    input: ['amanaplanacanalpandemonium'],
    expected: false
  },
]

describe("isPalindrome", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(isPalindrome(...example.input)).toBe(example.expected);
    });
  });
});
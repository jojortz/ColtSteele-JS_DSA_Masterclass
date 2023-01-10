const power = require("../../Recursion/power");

const examples = [
  {
    input: [2, 0],
    expected: 1
  },
  {
    input: [2, 4],
    expected: 16
  },
]

describe("power", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(power(...example.input)).toBe(example.expected);
    });
  });
});
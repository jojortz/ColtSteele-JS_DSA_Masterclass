const stringifyNumbers = require("../../Recursion/stringifyNumbers");

var obj1 = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
};

const expected = {
  num: "1",
  test: [],
  data: {
      val: "4",
      info: {
          isRight: true,
          random: "66"
      }
  }
};

const examples = [
  {
    input: obj1,
    expected
  },
]

describe("stringifyNumbers", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(stringifyNumbers(example.input)).toEqual(example.expected);
    });
  });
});
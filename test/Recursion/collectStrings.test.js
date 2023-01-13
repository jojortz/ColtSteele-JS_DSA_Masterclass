const collectStrings = require("../../Recursion/collectStrings");

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

const examples = [
  {
    input: obj,
    expected:  ["foo", "bar", "baz"]
  },
]

describe("collectStrings", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(collectStrings(example.input)).toEqual(example.expected);
    });
  });
});
const validAnagram = require("../../ProblemSolvingPatterns/FrequencyCounter/validAnagram");

const examples = [
  {
    input: ['', ''],
    expected: true
  },
  {
    input: ['zza', 'aaz'],
    expected: false
  },
  {
    input: ['querty', 'yqeutr'],
    expected: true
  },
  {
    input: ['awesome', 'awesom'],
    expected: false
  },
]

describe("Anagrams", () => {
  examples.forEach((example) => {
    test(`Input: ${JSON.stringify(example.input)}`, () => {
      expect(validAnagram(...example.input)).toBe(example.expected);
    });
  });
});
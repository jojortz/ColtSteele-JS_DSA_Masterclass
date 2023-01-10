/***
 Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
- Time: O(N)
***/
const sameFrequency = (num1, num2) => {
  let numStr1 = num1.toString();
  let numStr2 = num2.toString();

  if (numStr1.length !== numStr2.length) return false;

  let num1Count = {};
  let num2Count = {};

  for (const char of numStr1) {
    num1Count[char] = ++num1Count[char] || 1;
  }
  for (const char of numStr2) {
    num2Count[char] = ++num2Count[char] || 1;
  }

  for (const key in num1Count) {
    if (num1Count[key] !== num2Count[key]) return false;
  }
  return true;
};

module.exports = sameFrequency;


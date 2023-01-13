/**
 * Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
 */
const stringifyNumbers = (obj) => {
  if (typeof obj === 'number') return obj.toString();
  if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) return obj;
  let result = {};
  for (const key in obj) {
    result[key] = stringifyNumbers(obj[key]);
  }
  return result;
};

module.exports = stringifyNumbers;
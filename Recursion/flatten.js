/**
 * Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 */

const flatten = (arr) => {
  let result = [];
  if (!Array.isArray(arr)) return [arr];
  for (let item of arr) {
    result = result.concat(flatten(item));
  };
  return result;
};

module.exports = flatten;
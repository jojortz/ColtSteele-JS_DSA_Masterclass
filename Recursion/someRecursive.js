/**
 * Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
 */

const someRecursive = (arr, callback) => {
  if (arr.length === 0) return false;
  return callback(arr[0]) || someRecursive(arr.slice(1), callback);
};

module.exports = someRecursive;
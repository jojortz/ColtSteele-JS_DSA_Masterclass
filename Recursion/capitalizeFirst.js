/**
 * Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
 */
const capitalizeFirst = (arr) => {
  if (arr.length === 0) return [];
  let thisStr = arr[0];
  let newStr = thisStr[0].toUpperCase() + thisStr.substring(1);
  let result = [newStr, ...capitalizeFirst(arr.slice(1))];
  return result;
};

module.exports = capitalizeFirst;
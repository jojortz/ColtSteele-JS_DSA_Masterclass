/**
 * Write a function called collectStrings which accepts an object and returns an array
 * of all the values in the object that have a typeof string
 */
const collectStrings = (obj) => {
  if (typeof obj === 'string') return [obj];
  if (typeof obj !== 'object') return [];
  let result = [];
  for (const key in obj) {
    result = result.concat(collectStrings(obj[key]));
  }
  return result;
};

module.exports = collectStrings;
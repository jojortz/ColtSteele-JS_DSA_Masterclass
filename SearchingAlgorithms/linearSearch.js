/**
 * Loop through array, and return index if element found. If not, return -1.
 */
const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};

module.exports = linearSearch;
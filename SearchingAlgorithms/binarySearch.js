/**
 * binarySearch
 */

const binarySearch_recursive = (arr, val, offset = 0) => {
  const midpoint = Math.floor(arr.length/2);
  if (arr[midpoint] === val) return midpoint + offset;
  if (arr.length === 0) return -1;
  if (arr[midpoint] > val) return binarySearch(arr.slice(0, midpoint), val, offset);
  return binarySearch(arr.slice(midpoint + 1), val, midpoint + offset + 1);
};

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);
  while (left < right) {
    if (arr[middle] === val) return middle;
    if (arr[middle] > val) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((right + left) / 2);
  }
  if (arr[middle] === val) return middle;
  return -1;
};

module.exports = binarySearch;
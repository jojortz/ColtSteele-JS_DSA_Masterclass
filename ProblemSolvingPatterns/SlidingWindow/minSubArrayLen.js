/*
minSubArrayLen accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
*/
const minSubArrayLen = (arr, num) => {
  let minLen = 0;
  let startIndex = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currVal = arr[i];
    if (currVal >= num) return 1;

    sum += currVal;
    if (sum >= num){
      while (sum >= num) {
        let currLen = i - startIndex + 1;
        if (minLen === 0) {
          minLen = currLen;
        } else if (currLen < minLen) {
          minLen = currLen;
        }
        sum -= arr[startIndex];
        startIndex++;
      }
      startIndex--;
      sum += arr[startIndex];
    }
  }
  return minLen;
};

module.exports = minSubArrayLen;
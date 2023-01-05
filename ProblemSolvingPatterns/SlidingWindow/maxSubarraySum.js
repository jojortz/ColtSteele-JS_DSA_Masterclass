const maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;
  let max = 0;
  for (let i = 0; i < n; i++) {
    max += arr[i];
  }
  let thisSum = max;
  for (let i = n; i < arr.length; i++) {
    thisSum = thisSum + arr[i] - arr[i - n];
    if (thisSum > max) max = thisSum;
  }
  return max;
};

module.exports = maxSubarraySum;
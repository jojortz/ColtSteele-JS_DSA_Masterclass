/**
 * Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
 */
const nestedEvenSum = (obj) => {
  if (typeof obj !== 'object') return obj % 2 === 0 ? obj : 0;
  let sum = 0;
  for (const key in obj) {
    sum += nestedEvenSum(obj[key]);
  }
  return sum;
};

module.exports = nestedEvenSum;
/**
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 */

const isPalindrome = (str) => {
  if (str.length <= 1) return true;
  return (str[0] === str.slice(-1) && isPalindrome(str.slice(1, -1)));
};

module.exports = isPalindrome;
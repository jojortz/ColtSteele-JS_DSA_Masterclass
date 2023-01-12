/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse
 */
const reverse = (str) => {
  if (str === "") return "";
  return reverse(str.substring(1)) + str[0];
};

module.exports = reverse;
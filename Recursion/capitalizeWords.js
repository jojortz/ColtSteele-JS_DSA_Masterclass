/**
 * Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
 */

const capitalizeWords = (words) => {
  if (words.length === 0) return [];
  return [words[0].toUpperCase(), ...capitalizeWords(words.slice(1))];
};

module.exports = capitalizeWords;
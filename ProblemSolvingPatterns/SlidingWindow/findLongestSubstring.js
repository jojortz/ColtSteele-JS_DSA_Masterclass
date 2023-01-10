/*
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
*/

const findLongestSubstring = (str) => {
  if (!str) return 0;
  let maxLen = 0;
  let currLen = 0;
  let chars = {};
  let startIndex = 0;
  //iterate through the str
  for (let i = 0; i < str.length; i++) {
    //if the current char is not in chars
    const char = str[i];
    if (chars[char] === undefined) {
      chars[char] = 1;
      currLen++;
      if (currLen > maxLen) maxLen = currLen;
    } else {
      for (let j = startIndex; j <= i; j++) {
        let thisChar = str[j];
        if (thisChar === char) {
          startIndex = j + 1;
          currLen = i - startIndex + 1;
          break;
        }
        delete chars[thisChar];
      }
    }
  }
  return maxLen;
};

module.exports = findLongestSubstring;
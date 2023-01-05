const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let str1Char = {};

  for (const char of str1) {
    str1Char[char] = ++str1Char[char] || 1;
  }

  for (const char of str2) {
    if (!str1Char[char]) {
      return false;
    } else {
      str1Char[char]--;
    }
  }

  return true;
};

const validAnagram_v1 = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let str1Char = {};
  let str2Char = {};
  for (const char of str1) {
    str1Char[char] = ++str1Char[char] || 1;
  }

  for (const char of str2) {
    str2Char[char] = ++str2Char[char] || 1;
  }

  for (const key in str1Char) {
    if (str1Char[key] !== str2Char[key]) return false;
  }

  return true;
};

module.exports = validAnagram;
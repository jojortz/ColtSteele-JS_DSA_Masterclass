/**************
 isSubsequence takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 **************/

 const isSubsequence = (sub, str) => {
  let subIndex = 0;
  for (const thisChar of str) {
    if (sub[subIndex] === thisChar) {
      subIndex++;
      if (subIndex === sub.length) return true;
    }
  }
  return false;
 };

 module.exports = isSubsequence;
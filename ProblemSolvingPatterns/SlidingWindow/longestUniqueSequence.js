const longestUniqueSequence = (str) => {
  let longestSeq = [];
  let currentSeq = [];
  let currChars = {};

  for (const char of str) {
    //if the current char is not in the object
    console.log(`New Char
    ${char}`)
    if (!currChars[char]) {
      //add it to the object
      currChars[char] = char;
      //add it to the current sequence
      currentSeq.push(char);
      //if current sequence is greater than the longestWord length
      if (currentSeq.length > longestSeq.length) longestSeq = currentSeq.slice();
    } else {
      console.log('repeat');
      //else
      //remove up to after the repeated letter
      const repeat = currentSeq.indexOf(char);
      for (let i = 0; i < repeat; i++) {
        delete currChars[currentSeq[i]];
      }
      currentSeq.push(char);
      currentSeq = currentSeq.slice(repeat + 1);
    }
    console.log(currentSeq, longestSeq);
  }
  return longestSeq.join("");
};

module.exports = longestUniqueSequence;
/* accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. */

const areThereDuplicates = (...args) => {
  let argCount = {};
  for (const arg of args) {
    if (argCount[arg] === undefined) {
      argCount[arg] = 1;
    } else {
      return true;
    }
  };
  return false;
};

module.exports = areThereDuplicates;
/* accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. */

const areThereDuplicates = (...args) => {
  args.sort();
  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] === args [i + 1]) return true;
  }
  return false;
};

module.exports = areThereDuplicates;
const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let p1 = 0;
  let count = 1;

  for (let p2 = 1; p2 < arr.length; p2++) {
    if (arr[p1] !== arr[p2]) {
      count++;
      p1 = p2;
    }
  }

  return count;
};

module.exports = countUniqueValues;
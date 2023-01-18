const radixSort = (arr) => {
  let maxDigits = maxDigitCount(arr);
  for (let i = 0; i < maxDigits; i++) {
    let buckets = Array.from({length: 10}, () => []);
    for (let num of arr) {
      let thisDigit = getDigit(num, i);
      buckets[thisDigit].push(num);
    }
    arr = [].concat(...buckets);
  }
  return arr;
};

const radixSort_v1 = (arr) => {
  let maxDigits = maxDigitCount(arr);

  for (let i = 0; i < maxDigits; i++) {
    let buckets = [];
    for (let i = 0; i < 10; i++) {
      buckets.push([]);
    };
    for (let num of arr) {
      let thisDigit = getDigit(num, i);
      buckets[thisDigit].push(num);
    }
    arr = [].concat.apply([], buckets);
  }
  return arr;
};

const getDigit = (num, place) => {
  let reduced = Math.floor(Math.abs(num) / (10 ** place));
  return reduced % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const maxDigitCount = (arr) => {
  let max = 0;
  for (const num of arr) {
    max = Math.max(max, digitCount(num));
  }
  return max;
};

module.exports = radixSort;
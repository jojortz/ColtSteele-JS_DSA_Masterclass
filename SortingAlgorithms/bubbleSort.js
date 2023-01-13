const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

module.exports = bubbleSort;
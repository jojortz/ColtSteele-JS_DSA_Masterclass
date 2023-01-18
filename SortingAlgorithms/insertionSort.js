const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      if (arr[j] < currVal) {
        arr[j + 1] = currVal;
        break;
      }
      arr[j + 1] = arr[j];
    };
  }
  return arr;
};

const insertionSort_v1 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        if (j < i - 1) insertSwap(arr, i, j + 1);
        break;
      } else if (j === 0) {
        insertSwap(arr, i, 0);
      }
    }
  }
  return arr;
};

const insertSwap = (arr, i, j) => {
  arr.splice(j, 0, arr[i]);
  arr.splice(i + 1, 1);
};

module.exports = insertionSort;
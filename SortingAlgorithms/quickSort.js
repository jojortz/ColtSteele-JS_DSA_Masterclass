const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (end <= start) return;
  let pivotIdx = pivot(arr, start, end);
  quickSort(arr, start, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, end);
  return arr;
};

const pivot = (arr, start, end) => {
  let pivot = arr[start];
  let pivotIdx = start;
  for (let i = start; i <= end; i++) {
    let curr = arr[i];
    if (pivot > curr) {
      pivotIdx++;
      swap(arr, pivotIdx, i);
    }
  }
  swap(arr, start, pivotIdx);
  return pivotIdx;
};

const swap = (arr, ind1, ind2) => {
  let temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
}

module.exports = quickSort;
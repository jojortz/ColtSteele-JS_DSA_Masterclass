const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArr(left, right);
};

const mergeSort_v1 = (arr) => {
  let mergeArrs = [];
  const splitArrs = (arr) => {
    if (arr.length <= 1) {
      mergeArrs.push(arr);
      return;
    }
    const half = Math.floor(arr.length/2);
    splitArrs(arr.slice(0, half));
    splitArrs(arr.slice(half));
  }
  splitArrs(arr);
  while (mergeArrs.length > 1) {
    let newArrs = [];
    for (let i = 0; i < mergeArrs.length; i += 2) {
      if (i === mergeArrs.length - 1) {
        newArrs.push(mergeArrs[i]);
        break;
      }
      let newArr = mergeArr(mergeArrs[i], mergeArrs[i + 1]);
      newArrs.push(newArr);
    };
    mergeArrs = newArrs;
  };
  return mergeArrs[0];
};


const mergeArr = (arr1, arr2) => {
  let ind1 = 0;
  let ind2 = 0;
  let result = [];
  while (ind1 < arr1.length || ind2 < arr2.length) {
    if (ind2 === arr2.length || arr1[ind1] < arr2[ind2]) {
      result.push(arr1[ind1]);
      ind1++;
    } else {
      result.push(arr2[ind2]);
      ind2++;
    }
  }

  return result;
}

module.exports = {
  mergeSort,
  mergeArr
};
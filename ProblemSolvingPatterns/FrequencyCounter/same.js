const same = (arr1, arr2) => {
  //if length of arr1 !== length arr2, return false
  if (arr1.length !== arr2.length) return false;
  let arr1Count = {};
  let arr2Count = {};
  //iterate through arr1
  arr1.forEach((num, i) => {
    //count frequency in both arr1 and arr2
    arr1Count[num] = ++arr1Count[num] || 1;
    arr2Count[Math.sqrt(arr2[i])] = ++arr2Count[Math.sqrt(arr2[i])] || 1;
  });
  //iterate through keys of arr1
  console.log('arr1', arr1Count, arr2Count);
  for (const key in arr1Count) {
    //if key is not defined in arr2 or value does not equal arr2, return false
    if (arr1Count[key] !== arr2Count[key]) return false;
  }
  return true;
}

const examples = [
  {
    input: [[1, 2, 3], [9, 1, 4]],
    expected: true
  },
  {
    input: [[1, 2, 3], [9, 1]],
    expected: false
  },
  {
    input: [[1, 2, 1], [4, 1, 4]],
    expected: false
  },
  {
    input: [[1, 2, 1], [1, 1, 4]],
    expected: true
  },
  {
    input: [[1, 2, 1], [1, 1, 8]],
    expected: false
  },
];

const tester = () => {
  let passCount = 0;
  examples.forEach((example, i) => {
    const arr1 = example.input[0];
    const arr2 = example.input[1];
    const actual = same(arr1, arr2);
    console.log(`
    --------- TEST CASE ${i} -----------
    INPUT: ${JSON.stringify(arr1)}, ${JSON.stringify(arr2)}
    RESULT: ${actual === example.expected ? '$$$$ SUCCESS $$$$' : '!!! FAILED !!!'}
    ACTUAL: ${actual}
    EXPECTED: ${example.expected}

    `);
    if (actual === example.expected) passCount++;
  });
  console.log(`++++++++++++++++
  SUMMARY
  ${passCount}/${examples.length}
  `)
};

tester();


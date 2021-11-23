function merge(left, right, compareFunc) {
  const resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (compareFunc(left[leftIndex], right[rightIndex])) {
      resultArray.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// eslint-disable-next-line import/prefer-default-export
export function mergeSort(unsortedArray, compareFunc) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  const middle = Math.floor(unsortedArray.length / 2);

  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  return merge(mergeSort(left, compareFunc), mergeSort(right, compareFunc), compareFunc);
}

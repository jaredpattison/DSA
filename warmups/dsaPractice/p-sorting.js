'use strict';

const numbers = [2, 4, 6, 1, 7, 19, 12, 65, 43, 77, 65, 100, 3];

const selectionSort = (array, compare) => {
  compare = compare ? compare : (a, b) => a < b;

  for (let i = 0; i < array.length; i++) {
    let swapIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (compare(array[j], array[swapIndex])) swapIndex = j;
    }

    if (swapIndex !== i) {
      let temp = array[i];
      array[i] = array[swapIndex];
      array[swapIndex] = temp;
    }
  }

  return array;
};

const mergeSort = (items, compare = (a, b) => a < b) => {
  // compare = compare ? compare : (a, b) => a < b;

  if (items.length < 2) return items;

  let middle = Math.floor(items.length / 2);
  let left = items.slice(0, middle);
  let right = items.slice(middle);

  const _merger = (left, right, compare) => {
    let result = [];

    while (left.length || right.length) {
      if (!left.length) {
        result.push(right.shift());
        continue;
      }

      if (!right.length) {
        result.push(left.shift());
        continue;
      }

      if (compare(left[0], right[0])) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left).concat(right);

  };
  return _merger(mergeSort(left, compare), mergeSort(right, compare), compare);

};

const quickSort = (items, compare, left, right) => {

};
// console.log(selectionSort(numbers));
// console.log(selectionSort(numbers, ((a,b) => a > b)));
console.log('mergeSort compare: a > b: ', mergeSort(numbers, ((a,b) => a > b)));
console.log('mergeSort: ', mergeSort(numbers));
// console.log(quickSort(numbers, ((a,b) => a > b)));
// console.log(quickSort(numbers));
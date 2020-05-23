'use strict';

const numbers = [2, 4, 6, 1, 7, 19, 12, 65, 43, 77, 65, 100, 3];

const selectionSort = (array, compare) => {
  compare = compare ? compare : (a, b) =>  a < b;

  for (let i = 0; i < array.length; i++) {
    let swapIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      console.log(array, j)
      if (compare(array[j], array[swapIndex])) swapIndex = j;
    }

    if (swapIndex !== i) {
      console.log('swap')
      let tmp = array[i];
      array[i] = array[swapIndex];
      array[swapIndex] = tmp;
    }
  }
  return array;
};

const mergeSort = (items, compare) => {
};

const quickSort = (items, compare, left, right) => {

};
console.log(selectionSort(numbers));
// console.log(selectionSort(numbers, ((a,b) => a > b)));
// console.log('mergeSort compare: a > b: ', mergeSort(numbers, ((a,b) => a > b)));
// console.log('mergeSort: ', mergeSort(numbers));
// console.log(quickSort(numbers, ((a,b) => a > b)));
// console.log(quickSort(numbers));
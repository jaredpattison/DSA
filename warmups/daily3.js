'use strict';

const util = require('util');

let numbers = [1,2,3,4,5,6,7,8,9,10];

// ---------------------------------------------------- //

const forLoop = arr => {
  for (let i of arr) console.log(i);
};

const whileLoop = arr => {
  const temp = [...arr];
  while (temp.length) console.log(temp.shift());
};

const map = (arr, cb) => {
  const res = [];
  for (let i of arr) res.push(cb(i));
  return res;
};

const mapInPlace = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) arr[i] = cb(arr[i]);
};

const filter = (arr, cb) => {
  const temp = [];
  for (let i of arr) {
    if (cb(i)) temp.push(i);
  }
  return temp;
};

const filterInPlace = (arr, cb) => {
  let j = 0;
  for (let i of arr) {
    if (cb(i)) arr[j++] = i;
  }
  arr.length = j;
};

const reduce = (arr, cb, acc) => {
  for (let i = 0; i < arr.length; i++) acc = cb(acc, arr[i], i);
  return acc;
};

// ---------------------------------------------------- //

console.log('forLoop()');
forLoop(numbers);
console.log('------------------\n\n');

console.log('whileLoop()');
whileLoop(numbers);
console.log('------------------\n\n');

console.log('map()');
let squares = map(numbers, (val=>val * val));
console.log({squares});
console.log('------------------\n\n');

console.log('mapInPlace()');
let mapNums = [...numbers];
console.log({mapNums});
mapInPlace(mapNums, (val=>val*val));
console.log({mapNums});
console.log('------------------\n\n');

console.log('filter()');
let odds = filter(numbers, (val => val % 2));
console.log({odds});
console.log('------------------\n\n');

console.log('filterInPlace()');
let filterNums = [...numbers];
console.log({filterNums});
filterInPlace(filterNums, (val => val % 2));
console.log({filterNums});
console.log('------------------\n\n');

console.log('reduce()');
let sum = reduce(numbers, (acc,num) => {
  acc += num;
  return acc;
},0);

console.log({sum});
console.log('------------------\n\n');

// ---------------------------------------------------- //

const people = ['Kookla','Fran','Ollie'];
const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda'],
};

// ---------------------------------------------------- //

const state = {people, stuff};
const newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars: [...stuff.cars, 'Ford']};
const newState = {people: ['Lola', ...newPeople, 'Lilly'], stuff: {...stuff, cars: [...stuff.cars, 'Nissan']}};

// ---------------------------------------------------- //

console.log({people});
console.log('------------------\n\n');

console.log({newPeople});
console.log('------------------\n\n');

console.log({stuff});
console.log('------------------\n\n');

console.log({newStuff});
console.log('------------------\n\n');

console.log({state});
console.log('------------------\n\n');

console.log(util.inspect(state, 2));
console.log('------------------\n\n');

console.log({newState});
console.log('------------------\n\n');

console.log(util.inspect(newState, 2));
console.log('------------------\n\n');

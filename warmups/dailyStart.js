'use strict';

const util = require('util');

let numbers = [1,2,3,4,5,6,7,8,9,10];

// ---------------------------------------------------- //



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



// ---------------------------------------------------- //

console.log({people});
console.log('------------------\n\n');

console.log({newPeople});
console.log('------------------\n\n');

console.log({stuff});
console.log('------------------\n\n');

console.log({newStuff});
console.log('------------------\n\n');

console.log(util.inspect(state, 2));
console.log('------------------\n\n');

console.log(util.inspect(newState, 2));
console.log('------------------\n\n');
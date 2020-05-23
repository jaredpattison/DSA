'use strict';

const processNumbers = () => {

  // generate a list of integers with all odd numbers, 20 numbers
  // take first five numbers square them and multiply them together, add the result
  // to the array, repeat for each set of five numbers, total of four numbers
  // print first array before processing, then print results array
  let array = [];
  for (let i = 1; i < 42; i++) {
    if (i % 2) array.push(i);
  }
  // console.log(array)
  let squares = array.map( int => int * int);
  
  let results = squares.reduce( (acc, val, idx) => {
    acc[0] *= val;
    if ( (idx + 1) % 5 === 0) {
      acc.push(acc[0]);
      acc[0] = 1;
    }
    return acc;
  }, [1]);
  results.shift();
  // console.log('with reduce: ', results);
  // let temp = 1;
  // for (let j = 0; j < squares.length; j++) {
  //   temp *= squares[j];

  //   if ((j + 1)% 5 === 0 ) {
  //     results.push(temp)
  //     temp = 1;
  //   }
  // }
  // console.log(results);

}

processNumbers();
// [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41 ]
// [ 893025, 480020337225, 89391824825625, 2669439105558225 ]

function Person(first, last, age, gender, interests) {
  this.name = {
    first : first,
    last : last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    return(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  // this.greeting = function() {
  //   console.log('Hi! I\'m ' + this.name.last + '.');
  // };
}

Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};

function Student(first, last, age, gender, interests, id) {
  Person.call(this, first, last, age, gender, interests);

  this.id = id;
}

Student.prototype = Object.create(Person.prototype);

Object.defineProperty(Student.prototype, 'constructor', {
  value: Student,
  enumerable: false,
  writable: true,
});

Student.prototype.greeting = function() {
  console.log(`Hi? I'm ${this.name.first}, my id is ${this.id}`);
};

const person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
const student1 = new Student('kid', 'play', 12, 'male', ['hockey', 'stuff'], 76544);

// console.log(Object.getOwnPropertyNames(Person.prototype));
student1.greeting();
console.log(student1.bio());
// console.log(Student.prototype.constructor);
// console.log(person1['age']);
// console.log(person1.interests[1]);
// console.log(person1.bio());

// console.log(person1.valueOf());
// console.log(person1.name.first);
// person1.greeting();
// console.log(Person.prototype);
// console.log(Object.prototype);
'use strict';

// Reverse a string with built in array functions
const reverseStringArray = (str) => str.split('').reverse().join('');

// This is likely the answer they are looking for
const reverseStringForLoop = (str) => {
  let newString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

// a recursive option - Note, .slice() can be replaced with .substring() method with same parameter
const reverseStringRecursive = (str) => {
  if (str === '') 
    return '';

  return reverseStringRecursive(str.slice(1)) + str[0]; 
};

const isPal = (str) => {
  for (let i = 0; i < (str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};


// 'This string, had :puntuation. all? over, it!!!'
// let strRev = '!!!ti ,revo ?lla .noitautnup: dah ,gnirts sihT';

const removePunct = (str) => {
  const regex = /[\w\s]/g; 
  return str.match(regex).join('');
};

// Get product of all other elements -  compliments of asdFletcher

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example:
// [1, 2, 3, 4, 5] --> [120,60,40,30,24]
// [3,2,1] --> [2,3,6]

// The follow up question is, can you do this without division?

const prod = (arr) => {
  return arr.reduce((acc, val) => {
    return acc *= val;
  }, 1);
};

const productOfOthers = (arr) => {
  return arr.map((val, idx) => {
    return prod(arr.slice(0, idx)) * prod(arr.slice(idx + 1));
  });
};

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

const sumNum = (arr, k) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = (i + 1); j < arr.length; j++) {
      if ((arr[i] + arr[j]) === k) {return true;}
    }
  }
  return false;
};

describe('sumNum', () => {

  test('it should return true when given array with two numbers that add up to k', () => {
    const array = [10, 15, 3, 7];
    const k = 17;

    expect(sumNum(array, k)).toBeTruthy();
  });

  test('it should return false when given an array where no two numbers add up to k', () => {
    const array = [10, 15, 3, 7];
    const k = 11;

    expect(sumNum(array, k)).toBeFalsy;
  });

});

describe('Reverse a string', () => {
  test('it should return the string reversed', () => {
    const expected = reverseStringArray('!ereht olleh');
    
    expect(expected).toStrictEqual('hello there!');
  });
});

describe('Reverse a string with Decrementing For Loop', () => {
  test('it should return the string reversed', () => {
    const expected = reverseStringForLoop('!ereht olleh');
    
    expect(expected).toStrictEqual('hello there!');
  });
});

describe('Reverse a string recursively', () => {
  test('it should return the string reversed', () => {
    const expected = reverseStringRecursive('!ereht olleh');
    
    expect(expected).toStrictEqual('hello there!');
  });
});

describe('Is palindrome', () => {
  test('it should return true when given even length palindrome', () => {
    const result = isPal('abba');

    expect(result).toBeTruthy();
  });

  test('it should return true when given odd length palindrome', () => {
    const result = isPal('abxba');

    expect(result).toBeTruthy();
  });

  test('it should return false when given even length non-palindrome', () => {
    const result = isPal('abxa');

    expect(result).toBeFalsy();
  });

  test('it should return true when given odd length non-palindrome', () => {
    const result = isPal('abbxa');

    expect(result).toBeFalsy();
  });
});

describe('remove punctuation from string', () => {
  test('it returns string with no punctuation', () => {
    const result = removePunct('?this, string has ma8ny &pu,.ncuation"s');

    const expected = 'this string has ma8ny puncuations';

    expect(result).toStrictEqual(expected);
  });
});

describe('product of others function', () => {
  test('it returns product of array excluding corresponding value', () => {
    const result = productOfOthers([ 1, 2, 3, 4, 5]);

    const expected = [ 120, 60, 40, 30, 24];

    expect(result).toStrictEqual(expected);
  });
});
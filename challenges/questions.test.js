'use strict';

// Reverse a string with built in functions
const reverseStringArray = (str) => {
  return str.split('').reverse().join('');
};

// This is likely the answer they are looking for
const reverseStringForLoop = (str) => {
  let newString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

const reverseStringRecursive = (str) => {
  if (str === '') 
    return '';

  return reverseStringRecursive(str.substr(1)) + str.charAt(0); 
};

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

describe('Reverse a string', () => {
  test('it should return the string reversed', () => {
    const expected = reverseStringRecursive('!ereht olleh');
    
    expect(expected).toStrictEqual('hello there!');
  });
});
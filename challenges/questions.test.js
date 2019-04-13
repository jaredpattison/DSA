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

const isPal = (str) => {
  for (let i = 0; i <= str.length/2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};


// 'This string, had :puntuation. all? over, it!!!'
// let strRev = '!!!ti ,revo ?lla .noitautnup: dah ,gnirts sihT';

const removePunct = (str) => {
  const regex = /[A-Za-z\d\s]/g;
  return str.match(regex).join('');
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
    const result = removePunct('?this, string has many &pu,.ncuation"s');

    const expected = 'this string has many puncuations';

    expect(result).toStrictEqual(expected);
  });
});
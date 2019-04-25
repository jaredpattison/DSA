Data Structures and Algorithms
=================================================


### Author: Jared Pattison

### Links and Resources

- These DSA classes are my TypeScript implementations of pseudocode found in [Data Structures and Algorithms: Annotated Referene with Examples - First Edition](http://www.freetechbooks.com/dotnetslackers-p1936.html)  
Granville Barnett and Luca Del Tongo 2008  
- Challenges folder contains JavaScript Code Challenges from Code Fellows 301 complete with jest tests
  - Challenge 1: string, array, forEach
  - Challenge 2: string, array, obj
  - Challenge 3: sort
  - Challenge 4: regex
  - Challenge 5: slice, splice, split, regex
  - Challenge 6: forEach, objects
  - Challenge 7: loops, map
  - Challenge 8: filter
  - Challenge 9: reduce
  - Challenge 10: reduce, map
  - Challenge 11: regex
  - Challenge 12: 2D arrays
  - Challenge 13: map, filter, reduce, regex
  - Challenge 14: reduce, objects, 2D arrays
  - Questions: random interview javaScript question and tests

[![Build Status](https://travis-ci.com/jaredpattison/dsa.svg?branch=master)](https://travis-ci.com/jaredpattison/dsa)

* [repo](https://github.com/jaredpattison/dsa)
* [travis](https://travis-ci.com/jaredpattison/dsa)
* [Singly Linked List](singlyLinkedList\README.md)

--- 

---



### Testing
All testing was done with Jest: 
* [Jest docs](https://jestjs.io/docs/en/getting-started)
* [ts-jest](https://www.npmjs.com/package/ts-jest)  

Instructions for replicating the tests for this project are as follows:

* Clone the repo.
* Create a node runtime environment

    ```JavaScript
    npm init
    ```
    This will create a `package.json` file, a `package-lock.json` file.

* Install ts-jest

    ```JavaScript
    npm i -D jest typescript
    npm i -D ts-jest @types/jest
    ```

* Create config

    ```JavaScript
    npx ts-jest config:init
    ```

* Run jest
    ```JavaScript
    npm jest --verbose --coverage
    ```
    It is useful to bind this to the command:
    ```JavaScript
    npm test
    ```
    To do this, manually edit your package.json to include the following under the "scripts" attribute:
    ```Javascript
    "scripts": {
        "test": "jest --verbose --coverage",
        "test-watch": "jest --watchAll --verbose --coverage"
    }
    ```
    `test-watch` will re-run tests when the file is saved
---

### Dependencies

* jest: `npm i jest`
* typescript: `npm i typescript`
* ts-jest: `npm i -D jest typescript`

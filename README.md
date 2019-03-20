Data Structures and Algorithms
=================================================


### Author: Jared Pattison

### Links and Resources

These DSA classes are my JavaScript implementations of pseudocode found in [Data Structures and Algorithms: Annotated Referene with Examples - First Edition](http://www.freetechbooks.com/dotnetslackers-p1936.html)  
Granville Barnett and Luca Del Tongo 2008

[![Build Status](https://travis-ci.com/jaredpattison/dsa.svg?branch=master)](https://travis-ci.com/jaredpattison/dsa)

* [repo](https://github.com/jaredpattison/dsa)
* [travis](https://travis-ci.com/jaredpattison/dsa)


--- 

---


### Testing

The linked-list folder holds all files that define the linked list class:

Tests are written for the LinkedList class methods and can be found here:

All testing for this class was done with Jest: 
* [Jest docs](https://jestjs.io/docs/en/getting-started)

Instructions for replicating the tests for this project are as follows:

* Clone the repo.
* Create a node runtime environment

    ```JavaScript
    npm init
    ```
    This will create a `package.json` file, a `package-lock.json` file.

* Install Jest

    ```JavaScript
    npm i jest
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


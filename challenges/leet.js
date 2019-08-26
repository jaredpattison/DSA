/* Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false;
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) col--;
    else if (matrix[row][col] < target) row++;
    else if (matrix[row][col] === target) return true;
  }
  return false;
};

/* 90 Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
] */

const subsetsWithDup = nums => {
  nums = nums.sort();
  return backtrack(nums);
};

const backtrack = (nums, res = [], idx = 0, path = []) => {
  res.push(path.slice());

  for (let i = idx; i < nums.length; i++) {
    if (i > idx && nums[i] === nums[i - 1]) {
      continue;
    }

    path.push(nums[i]);
    backtrack(nums, res, i + 1, path);
    path.pop();
  }
  return res;
};

/* 79 Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false. */

var exist = function(board, word) {
  // result boolean
  let found = false;

  // keep track of visited spaces
  let boolBoard = [];

  // create boolean array row*column of board
  for (let i = 0; i < board.length; i++) {
    boolBoard.push(Array(board[0].length).fill(false));
  }

  // recursive function helper
  // wordIndex = current index of the word were searching for, initializes at 0
  // row and col is the last location of the previous found char
  function helper(wordIndex, row, col) {
    // if word has been found short circuit all recursion calls
    if (found) return;

    // if wordIndex === word.length, that means the full word has been found
    if (wordIndex === word.length) {
      found = true;
      return;
    }

    // if we find the initial char of the word were searching for, we can start backtracking
    if (wordIndex > 0) {
      // char were looking for
      const char = word[wordIndex];

      // set of if statements to look for char around the previous row and column values
      if (foundChar(row + 1, col, char)) {
        // set row and col visited
        boolBoard[row + 1][col] = true;
        helper(wordIndex + 1, row + 1, col);

        // unset row and col visited because we did not find the word yet
        boolBoard[row + 1][col] = false;
      }

      // same explanations as above
      if (foundChar(row - 1, col, char)) {
        boolBoard[row - 1][col] = true;
        helper(wordIndex + 1, row - 1, col);
        boolBoard[row - 1][col] = false;
      }

      if (foundChar(row, col + 1, char)) {
        boolBoard[row][col + 1] = true;
        helper(wordIndex + 1, row, col + 1);
        boolBoard[row][col + 1] = false;
      }

      if (foundChar(row, col - 1, char)) {
        boolBoard[row][col - 1] = true;
        helper(wordIndex + 1, row, col - 1);
        boolBoard[row][col - 1] = false;
      }

      // short circuit because we've found the initial letter
      return;
    }

    // look for initial letter to start back tracking process
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[0].length; c++) {
        const char = word[wordIndex];

        // start recursive method for every char that matches the first char of the word
        if (char === board[r][c]) {
          boolBoard[r][c] = true;
          helper(wordIndex + 1, r, c);
          boolBoard[r][c] = false;
        }
      }
    }
  }

  // util function for finding char, handles board edges, and checks visited bool board
  function foundChar(row, col, char) {
    if (row < 0 || col < 0 || col == board[0].length || row == board.length)
      return false;

    return board[row][col] === char && boolBoard[row][col] !== true;
  }

  helper(0, 0, 0);
  return found;
};

/* 36 Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9. */

var isValidSudoku = function(board) {
  var set = new Set();
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      let cur = board[i][j];
      if (cur !== '.') {
        if (
          set.has(cur + ' in row ' + i) ||
          set.has(cur + ' in col ' + j) ||
          set.has(
            cur + ' in block ' + Math.floor(i / 3) + '-' + Math.floor(j / 3)
          )
        ) {
          return false;
        } else {
          set.add(cur + ' in row ' + i);
          set.add(cur + ' in col ' + j);
          set.add(
            cur + ' in block ' + Math.floor(i / 3) + '-' + Math.floor(j / 3)
          );
        }
      }
    }
  }
  return true;
};

/* 38 The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

 

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211" */

var countAndSay = function(n) {
  if(n==1) return '1';
  let preS = countAndSay(n-1).split('');

  let result = '';
  let counter = 0;
  for(let i = 0; i<preS.length; i++){
    if(counter == 0 || preS[i] == preS[i-1]){
      counter++;    
      if(i == preS.length -1 ){
        result = result + counter + preS[i];
      }
    }else{
      result = result + counter + preS[i-1];
      i--;
      counter=0;
    }     
  }
  return result;
  
};

/* 58 Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5 */

var lengthOfLastWord = function(s) {
  // let str = s.trim();
  // for (let i = str.length - 1; i >= 0; i--) {
  //     if (str[i] === ' ') return str.length - 1 - i;
  // }
  // return str.length;
  return s.trim().split(' ').pop().length;
};

/* 12 Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"
Example 2:

Input: 4
Output: "IV"
Example 3:

Input: 9
Output: "IX"
Example 4:

Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4. */

var intToRoman = function(num) {
  let res = "";
  
  // declare the different roman numerals with their values
  const numerals = {
      M:1000,
      CM:900,
      D:500,
      CD:400,
      C:100,
      XC:90,
      L:50,
      XL:40,
      X:10,
      IX:9,
      V:5,
      IV:4,
      I:1
  }
  
  for (var key in numerals) {
      /* loop through for as long as the number is more than or equal to the value whilst adding key to string and removing the value from the number
      */
      while (numerals[key] <= num) {
          res += key;
          num -= numerals[key];
      }
  }
  
  return res;
};
/* 112 Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22. */

var hasPathSum = function(root, sum) {
    
  if (!root) return false;
  let res = false;
  
  const _walk = (node, val) => {
      let tempSum = val + node.val;
      if (!node.left && !node.right && tempSum === sum) {
          res = true;
          return;
      }
      if (node.left) _walk(node.left, tempSum);
      if (node.right) _walk(node.right, tempSum);
   
  }
  _walk(root, 0);
  return res;
  
};

/* 118 Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
] */

var generate = function(numRows) {
    
  let triangle = [];
  
  if (numRows === 0) return triangle;
  
  triangle.push([1])
  
  for (let rowNum = 1; rowNum < numRows; rowNum++) {
      let row = [];
      let prevRow = triangle[rowNum - 1];
      
      row.push(1);
      
      for (let j = 1; j < rowNum; j++) {
          row.push(prevRow[j-1] + prevRow[j]);
      }
      
      row.push(1);
      triangle.push(row);
  }
  
  return triangle;    
};
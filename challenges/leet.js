/* 2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807. */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    const dummyHead = new NodeList(0);
    let carry = 0, p = l1, q = l2, curr = dummyHead;
    while (p || q) {
      x = p ? p.val : 0;
      y = q ? q.val : 0;
      sum = p + q + carry;
      curr.next = new NodeList(sum % 10);
      carry = Math.floor(sum / 10);
      curr = curr.next;
      p = p?.next;
      q = q?.next;
    }
    if (carry) curr.next = new NodeList(carry);
    return dummyHead.next;
};

/* 4. Median of Two Sorted Arrays

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume arr1 and arr2 cannot be both empty.

Example 1:

arr1 = [1, 3]
arr2 = [2]

The median is 2.0
Example 2:

arr1 = [1, 2]
arr2 = [3, 4]

The median is (2 + 3)/2 = 2.5 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */

const findMedianSortedArrays = (arr1, arr2) => {
  let p1 = 0, p2 = 0, res;
  const newArr = [], len = arr1.length + arr2.length;
  while (p1 < arr1.length && p2 < arr2.length && newArr.length <= len) {
    if (arr1[p1] < arr2[p2]) newArr.push(arr1[p1++]); 
    else newArr.push(arr2[p2++]);
  }
  if (p1 < arr1.length) newArr.push(...arr1.slice(p1));
  else newArr.push(...arr2.slice(p2));
  if(newArr.length % 2 === 0) {
    res = (newArr[len / 2] + newArr[(len / 2) - 1]) / 2;
  } else res = newArr[(len - 1) / 2]
  return res;
};

/* 5. Longest Palindromic Substring
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb" */

/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = s => {
  if (!s || s.length <= 1) return s;
  let start = 0, end = 0;
  for (let i = 0; i < s.length - (end - start); i++) {
    const len1 = grow(s, i, i);
    const len2 = grow(s, i, i + 1);
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.slice(start, end + 1);
};

const grow = (s, start, end) => {
  while (start >= 0 && end < s.length && s[start] === s[end]) {
    start --;
    end ++;
  }
  return end - start - 1;
}

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
      if (cur !== ".") {
        if (
          set.has(cur + " in row " + i) ||
          set.has(cur + " in col " + j) ||
          set.has(
            cur + " in block " + Math.floor(i / 3) + "-" + Math.floor(j / 3)
          )
        ) {
          return false;
        } else {
          set.add(cur + " in row " + i);
          set.add(cur + " in col " + j);
          set.add(
            cur + " in block " + Math.floor(i / 3) + "-" + Math.floor(j / 3)
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
  if (n == 1) return "1";
  let preS = countAndSay(n - 1).split("");

  let result = "";
  let counter = 0;
  for (let i = 0; i < preS.length; i++) {
    if (counter == 0 || preS[i] == preS[i - 1]) {
      counter++;
      if (i == preS.length - 1) {
        result = result + counter + preS[i];
      }
    } else {
      result = result + counter + preS[i - 1];
      i--;
      counter = 0;
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
  return s
    .trim()
    .split(" ")
    .pop().length;
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
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

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
  };
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

  triangle.push([1]);

  for (let rowNum = 1; rowNum < numRows; rowNum++) {
    let row = [];
    let prevRow = triangle[rowNum - 1];

    row.push(1);

    for (let j = 1; j < rowNum; j++) {
      row.push(prevRow[j - 1] + prevRow[j]);
    }

    row.push(1);
    triangle.push(row);
  }

  return triangle;
};



/* 21 Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  // both solutions start the same:
  if (!l1) return l2;
  if (!l2) return l1;

  let less = l1.val < l2.val ? l1 : l2;
  let more = l1.val < l2.val ? l2 : l1;

  // following solution changes pointer:
  /* let curr = less;
  while (curr.next) {
    if (more.val < curr.next.val) {
      let temp = curr.next;
      curr.next = more;
      curr = more;
      more = temp;
    } 
    else curr = curr.next;
  }
  curr.next = more; */

  // or a recursive solution:
  less.next = mergeTwoLists(less.next, more);
  // both solutions with the same return:
  return less;
};

/* 7 Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows. */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  let rev = 0;
  while (x != 0) {
    // Following line commented out and replaced to stay within leetcode integer range
    // if (rev > Number.MAX_SAFE_INTEGER / 10 || rev < - Number.MAX_SAFE_INTEGER / 10) return 0;
    if (rev > 2 ** 31 / 10 || rev < -(2 ** 31 / 10)) return 0;
    let pop = x % 10;
    if (x > 0) x = Math.floor(x / 10);
    else x = Math.ceil(x / 10);

    rev = rev * 10 + pop;
  }
  return rev;
};

/* 52 The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.

Example:

Input: 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."], */

  /**
 * @param {number} n
 * @return {number}
 */
// this solution utilizes bitwise operators
const backtrack = (board, n, idx) => {
  if (idx === n) return 1;
  else {
      let mask = 0;
      for (let i = 0; i < idx; i++) {
          let pos = board[i];
          mask = mask | pos | (pos << (idx - i)) | (pos >>> (idx - i));
      }
      let count = 0;
      for (let i = 0; i < n; i++) {
          if (((1 << i) & mask) === 0) {
              board[idx] = (1 << i);
              count += backtrack(board, n, idx + 1)
              board[idx] = 0;
          }
      }
      return count;
  }
}

/* 24 Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

 

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3. */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = head => {
    
  if (!head || !head.next) return head;
  let curr = head;
  let prev = null;
  head = head.next; 

  while (curr && curr.next) {
      let temp = curr.next;
      curr.next = temp.next;
      temp.next = curr;
      if (prev) prev.next = temp;
      prev = curr;
      curr = curr.next;
  }
  return head;
  
};

/* 55 Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index. */

// Inefficient backtracking:
/**
 * @param {number[]} nums
 * @return {boolean}
 */

const canJumpFromPosition = (pos, nums) => {
  if (pos === nums.length - 1) return true;
  
  let furthestJump = Math.min(pos + nums[pos], nums.length - 1);
  for (let nextPos = ++pos; nextPos <= furthestJump; nextPos++) {
  // startin from furthest possible position posibly more efficient:
  //  for (let nextPos = furthestJump; nextPos > pos; nextPos--) {
      if (canJumpFromPosition(nextPos, nums)) return true; 
  }
  return false;
}

const canJump = nums => {
  return canJumpFromPosition(0, nums);
};

// starting with furthest jump, possibly more efficient:
const canJumpFromPosition = (pos, nums) => {
  if (pos === nums.length - 1) return true;
  
  let furthestJump = Math.min(pos + nums[pos], nums.length - 1);
  for (let nextPos = furthestJump; nextPos > pos; nextPos--) {
      if (canJumpFromPosition(nextPos, nums)) return true; 
  }
  return false;
}

const canJump = nums => {
  return canJumpFromPosition(0, nums);
};

// memoization:
let memo;

const canJumpFromPosition = (pos, nums) => {
    if (memo[pos] !== 'UNKOWN') return memo[pos] === 'GOOD' ? true : false;
    
    let furthestJump = Math.min(pos + nums[pos], nums.length - 1);
    for (let nextPos = furthestJump; nextPos > pos; nextPos--) {
        if (canJumpFromPosition(nextPos, nums)) {
            memo[pos] = 'GOOD';    
            return true;
        } 
    }
    memo[pos] = 'BAD';
    return false;
}

const canJump = nums => {

    memo = new Array(nums.length - 1).fill('UNKOWN');
    memo.push('GOOD');
    return canJumpFromPosition(0, nums);
};

// bottom up:
const canJump = (nums) => {
  let lastPos = nums.length - 1;
  for (let i = nums.length - 1; i >=0; i--){
      if (i + nums[i] >= lastPos) lastPos = i;
  }
  return lastPos === 0;
};

// or this:
const canJump = (nums) => {
  let len = nums.length;
  let max = 0;
  for (let i = 0; i <= max; i++) {
      max = Math.max(max, i + nums[i]);
      if (max >= len - 1) return true;
  }
  return false;
};

/* 1 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. */

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) return [i, j];
      }
  }
};
// hash map
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], i);
      }
  for (let i = 0; i < nums.length; i++) {
      let comp = target - nums[i];
      if (map.has(comp) && map.get(comp) !== i) return [i, map.get(comp)];
  }   
};

// check hashmap as you buils it
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      let comp = target - nums[i];
      if (map.has(comp) && map.get(comp) !== i) return [i, map.get(comp)];
      map.set(nums[i], i);
      }    
};

/* 3 Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */
// optimized sliding window
const lengthOfLongestSubstring = s => {

  let n = s.length, ans = 0;
  let dict = new Map();

  for (let j = 0, i = 0; j < n; j++) {
    if (dict.has(s[j])) {
      i = Math.max(dict.get(s[j]) + 1, i)
    }
    ans = Math.max(ans, j - i + 1);
    dict.set(s[j], j );
  }
  return ans;
}

lengthOfLongestSubstring('pwwkew')

/* 45 Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
Note:

You can assume that you can always reach the last index. */
// const jump = (nums) => {
//     let goal = nums.length - 1, j = 1, i = 0;
//     while (i < goal) {
//         if (i + nums[i] === goal) {
//             j = j + 1;
//             console.log(j, i)
//             goal = i;
//             i = 0;
//         } else {
//           console.log(i, nums[i], goal);
//           i = i + 1;
//         }
//     }
//     return j;  
// };
// much more efficient
const jump = (nums) => {
  if (nums.length === 1) return 0;
  let idx = 0, count = 0;
  while (idx + nums[idx] < nums.length - 1) {
    let max = 0, next = 0;
    for (let i = 1; i <= nums[idx]; i++) {
      let j = idx + i, step = nums[j];
      if (step + i >= max) {
        max = step + i;
        next = j;
      }
    }
  idx = next;
  count++;
  }  
  return count + 1;
};

jump([ 2, 3, 1, 1, 4]);

/* 146 Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4 */

/**
 * @param {number} capacity
 */
const LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  let val = this.map.get(key);
  if (typeof val === 'undefined') return -1;
  this.map.delete(key);
  this.map.set(key, val);
  return val;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  this.map.delete(key);
  this.map.set(key, value);
  let keys = this.map.keys();
  if (this.map.size > this.capacity) this.map.delete(keys.next().value);
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

/* 130 Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'.
Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'.
Two cells are connected if they are adjacent cells connected horizontally or vertically. */

const solve = board => {
    
  if (!board.length) return;
  
  const dfs = (board, i, j) => {
      // if out of bounds or land on an X or a # return 
      if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== 'O') return;
      // change all O's to #'s
      board[i][j] = '#';
      // send all adjacent elements for the same treatment
      dfs(board, i + 1, j);
      dfs(board, i - 1, j);
      dfs(board, i, j + 1);
      dfs(board, i, j - 1);
  }
  // send all elements on the edge to dfs, looking for all O's
  for (let i = 0; i < board.length; i++) {
      dfs(board, i, 0);
      dfs(board, i, board[0].length - 1);
  }
  for (let i = 0; i < board[0].length; i++) {
      dfs(board, 0, i);
      dfs(board, board.length - 1, i);
  }
  // iterate through entire board changing O's to X's and #'s back to O's
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (board[i][j] === 'O') board[i][j] = 'X';
          if (board[i][j] === '#') board[i][j] = 'O';
      }
  }
  
};

/* 108 Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// this doesn't work in leetcode but seems to fill requirements
// const sortedArrayToBST = nums => {

//  if (!nums.length) return null;
//  let mid = Math.floor((nums.length - 1) / 2);
//  let root = new TreeNode(nums[mid]);
//  if (nums.length === 1) return root;
//  let nodeRight = new TreeNode(nums[mid + 1]);
//  root.right = nodeRight;
//  if (nums.length === 2) return root;
//  let nodeLeft = new TreeNode(nums[mid - 1]);
//  root.left = nodeLeft;

//  let i = mid - 2;
//  while (i >= 0) {
//    let temp = new TreeNode(nums[i--]);
//    nodeLeft.left = temp;
//    nodeLeft = temp;
//  }

//  let j = mid + 2;
//  while (j <= nums.length - 1) {
//    let temp = new TreeNode(nums[j++]);
//    nodeRight.right = temp;
//    nodeRight = temp;
//  }
//  return root;

// };

// much more concise recursive solution, and works in leetcode
const sortedArrayToBST = (nums, start = 0, end = nums.length - 1)  => {

  if (start > end) return null;

  let mid = Math.floor((start + end) / 2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums, start, mid - 1);
  root.right = sortedArrayToBST(nums, mid + 1, end);
  return root;
};

sortedArrayToBST([-5,-1,0,1,2,3,4,5,6])

/* 147 Sort a linked list using insertion sort.


A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.
With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list
 

Algorithm of Insertion Sort:

Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
It repeats until no input elements remain.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5 */

const insertionSortList = head => {

  const dummy = new ListNode();
  while (head !== null) {
      let node = dummy;

      while(node.next && node.next.val < head.val ) {
          node = node.next;
      };
      
      let temp = head.next;
      head.next = node.next;
      node.next = head;
      head = temp;
  };  
  return dummy.next;

};

/* 94 Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively? */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// iterative:
const inorderTraversal = root => {
    
  const res = [];
  const stack = [];
  
  while (root || stack.length) {
      while (root) {
          stack.push(root);
          root = root.left;
      }
      root = stack.pop();
      res.push(root.val);
      root = root.right;
  }
  return res;
      
};
// and a far easier recursive solution:
// const inorderTraversal = root => {
    
//   const res = [];
//   if (!root) return res;
  
//   const _walk = node => {
      
//       if (node.left) _walk(node.left);
//       res.push(node.val);
//       if (node.right) _walk(node.right);
//   }    
//   _walk(root);
  
//   return res;
// };

/* 121 Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0. */

const maxProfit = arr => {
    
  let profit = 0;
  let min = arr[0];
  let max = min;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
          min = arr[i];
          max = min;
      }
      if (arr[i] > max) {
          max = arr[i];
          profit = Math.max(max - min, profit);
      }
  }
  return profit;
  
};

/* 136 Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4 */

const singleNumber = arr => {
    
  const set = new Set();
  
  for (let i of arr) {
      if (set.has(i)) set.delete(i);
      else set.add(i);
  }
  return [...set][0];
  
};

const singleNumber = arr => {
  // math solution, 2 * ( a + b + c) - ( a + a + b + b + c) = c  
  // return 2 * ([...new Set(arr)].reduce( (a,b) => a + b, 0)) - arr.reduce( (a,b) => a + b, 0);
  // bit manipulation: same complexity, less space O(1)
  return arr.reduce( (a,b) => a ^ b);
  
};

/* 31 Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1 */

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
const reverse = (arr, i) => {
  let j = arr.length -1;
  while (i < j) {
      swap(arr, i, j);
      i++;
      j--;
  }
}
const nextPermutation = arr => {
  let i = arr.length - 2;
  while (i >=0 && arr[i] >= arr[i + 1]) {
      i--;
  }
  if (i >= 0) {
      let j = arr.length - 1;
      while (arr[j] <= arr[i]) {
          j--;
      }
      swap(arr, i, j);
  }
  reverse(arr, i + 1);
};

/* 83 Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = head => {
    
  let curr = head;
  while (curr && curr.next) {
      if (curr.val === curr.next.val) curr.next = curr.next.next;
      else curr = curr.next;
  }
  return head;
  
};

/* 87 Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.

Below is one possible representation of s1 = "great":

    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
To scramble the string, we may choose any non-leaf node and swap its two children.

For example, if we choose the node "gr" and swap its two children, it produces a scrambled string "rgeat".

    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
We say that "rgeat" is a scrambled string of "great".

Similarly, if we continue to swap the children of nodes "eat" and "at", it produces a scrambled string "rgtae".

    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
We say that "rgtae" is a scrambled string of "great".

Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.

Example 1:

Input: s1 = "great", s2 = "rgeat"
Output: true
Example 2:

Input: s1 = "abcde", s2 = "caebd"
Output: false */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isScramble = (s1, s2) => {
    
  if (s1 == s2) return true;
 // check if each string has same letters
  const map = new Map();
  for (let i of s1) {
      if (map.has(i)) map.set(i, map.get(i) + 1);
      else map.set(i, 1);
  }
  for (let i of s2) {
      if (map.has(i)) map.set(i, map.get(i) - 1);
      else return false;
  }
  for (let val of map.values()) {
      if (val) return false;
  } // check if strings are symetrical
  for(let i = 1; i < s1.length; i++){
      if (isScramble(s1.substring(0,i), s2.substring(0,i)) && isScramble(s1.substring(i), s2.substring(i))) return true;
      if (isScramble(s1.substring(0,i), s2.substring(s2.length - i)) && isScramble(s1.substring(i), s2.substring(0,s2.length - i))) return true;
  }
  return false;
  
};
// fibonacci recursive, recursive with memo, DP
let calls = 0;

const fibRecur = n => {
  // recursive
  if (n === 0) return 0;
  if (n === 1) return 1;
  console.log(++calls)
  return fibRecur(n - 1) + fibRecur(n -2); 
}

// recursive with memoization
const fibRecurMemo = (n, map = new Map([
  [0, 0],
  [1, 1]
])) => {
  console.log(++calls)
  if (map.has(n)) return map.get(n);
  else {
    let f = fibRecurMemo(n - 1, map) + fibRecurMemo(n -2, map);
    map.set(n, f);
    return f;
  }
return map.get(n);

}
  // DP
const fibDP = n => {
  const res = [0, 1];
  
  for (let i = 2; i < n; i++) {
    res.push(res[i - 2] + res[i - 1]);
      console.log(++calls);
  }
  return res[n - 1];
}

// 0, 1, 2, 3, 5, 8, 13
// fibRecur(7);// n = 7, calls = 20
// fibRecurMemo(7);// n = 7, calls = 13
fibDP(7); // n = 7, calls = 5

let count = 0;
const climbStairsTwoRecurs = steps => {
  if (steps === 0) return 1;
  if (steps < 0) return 0;
  console.log(++count);
  return climbStairsTwoRecurs(steps - 1) + climbStairsTwoRecurs(steps - 2);
}

const memo = new Map();
const climbStairsTwoRecursMemo = steps => {
  if (steps === 0) return 1;
  if (steps < 0) return 0;
  if (memo.has(steps)) return memo.get(steps);
    console.log(++count);
  memo.set(steps, (climbStairsTwoRecursMemo(steps - 1) + climbStairsTwoRecursMemo(steps - 2)))
  return memo.get(steps);
}

const climbStairsTwoDP = steps => {
  if (steps === 1) return 1;
  let results = [1, 1, 2];
  for (let i = 4; i <= steps; i++) {
    results.push(results[i - 1] + results[i - 2]);
    console.log(++count);
  }
  return results[steps];

}

// const climbStairsDP = (arr, steps) => {
//   let res = [];
//   res[0] = 1;
//   for (let i = 1; i <= steps; i++){
//     let temp = 0;
//     for (let s of arr) {
//       if (i - s >= 0) {
//         temp += res[i - s];
//       }
//     }
//     res.push(temp);
//   }
//   console.log(res);
//   return res[steps];
// }
const climbStairsDP = (steps, n) => {
  let res = new Array(n + 1).fill(0);
  res[0] = 1;
  for (let i = 1; i <= n; i++){
    for (let s of steps) {
      if (i - s >= 0) res[i] += res[i - s];
    }
  }
  return res[n];
}


// climbStairsTwoRecurs(8); // 8: count 54, answer 34
// climbStairsTwoRecursMemo(8); // 8: count 8, answer 34
// climbStairsTwoDP(8); // 8: count 6, answer 34
climbStairsDP([1, 2, 3], 8);// res with [1,2,3] and n 0 - 5: [1, 1, 2, 4, 7, 13]
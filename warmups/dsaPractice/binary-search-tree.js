'use strict';

let {BinaryTree, Node} = require('./lib/binary-tree');
/* 98 Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4. */
// this looks like O(2n) as we itterate twice, O(n) space 
// const isValidBST = (root) => {
//   if (!root) return null;
//   let results = [];
//   let flag = true;

//   let _walk = (node) => {

//     if (node.left) _walk(node.left);
//     results.push(node.value);

//     if (node.right) _walk(node.right);
//   };
//   _walk(root);
//   for (let i = 1; i < results.length; i++) {
//     if (results[i] <= results[i-1]) flag = false;
//   }
//   return [flag, results];
// }
// this should be faster O(n) and less space O(n) where n is depth of tree rather than total nodes
// const isValidBST = (root) => {

//   let stack = [];
//   let inorder = Number.MIN_SAFE_INTEGER;

//   while (stack.length || root) {
    
//     while (root.left) {
//       stack.push(root);
//       root = root.left;
//     }
//     root = stack.pop();
//     if (root.val <= inorder) return false;
//     inorder = root.val;
//     root = root.right;
//   }
//   return true;
// }



// false
let one = new Node(1);
let two = new Node(1);
let three = new Node(3);
// let four = new Node(3);
// let five = new Node(6);
// true
// let one = new Node(3);
// let two = new Node(1);
// let three = new Node(5);
// let four = new Node(4);
// let five = new Node(6);

one.left = two;
one.right = three;
// three.left = four;
// three.right = five;

// const testTree = new BinaryTree(one);

console.log(isValidBST(one));
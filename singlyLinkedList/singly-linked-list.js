"use strict";
var Node = require("./singly-linked-list-node.js");
var util = require("util");
// Node based implementation of a linked list where every node has only a reference to the next node
var SinglyLinkedList = /** @class */ (function() {
  function SinglyLinkedList() {
    this.head = null;
    this.tail = null;
  }
  SinglyLinkedList.prototype.addLast = function(value) {
    var n = new Node(value);
    if (!this.head) {
      this.head = n;
      this.tail = n;
    } else {
      this.tail.next = n;
      this.tail = n;
    }
  };
  SinglyLinkedList.prototype.contains = function(value) {
    var n = this.head;
    while (n && n.value !== value) {
      n = n.next;
    }
    if (!n) {
      return false;
    }
    return true;
  };
  SinglyLinkedList.prototype.remove = function(value) {
    if (!this.head) {
      return false;
    } // list is empty
    var n = this.head;
    if (n.value === value) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next; // remove the head node
      }
      return true;
    }
    while (n.next && n.next.value !== value) {
      n = n.next;
    }
    if (n.next) {
      if (n.next === this.tail) {
        this.tail = n;
      }
      n.next = n.next.next; // remove node between head and tail
      return true;
    }
    return false; // no node with that value in this list
  };
  SinglyLinkedList.prototype.print = function() {
    var n = this.head;
    while (n) {
      console.log(n.value);
      n = n.next;
    }
  };
  SinglyLinkedList.prototype.printArray = function() {
    var n = this.head;
    var arr = [];
    while (n) {
      arr.push(n.value);
      n = n.next;
    }
    console.log(arr);
  };
  SinglyLinkedList.prototype.printObject = function() {
    console.log(util.inspect(this, { depth: this.length }));
  };
  return SinglyLinkedList;
})();
module.exports = SinglyLinkedList;

// let testList = new SinglyLinkedList();

// console.log("addLast(1)");
// testList.addLast(1);
// testList.printArray();
// console.log("addLast(45)");
// testList.addLast(45);
// testList.printArray();
// console.log("addLast(60)");
// testList.addLast(60);
// testList.printArray();
// console.log("addLast(12)");
// testList.addLast(12);
// testList.printArray();
// console.log("addLast(74)");
// testList.addLast(74);
// testList.printArray();
// console.log("addLast(9)");
// testList.addLast(9);

// testList.printArray();

// testList.printObject();

// testList.print();

// console.log("remove head (1):", testList.remove(1));
// testList.printArray();
// console.log("remove tail (9):", testList.remove(9));
// testList.printArray();
// console.log("remove none existant (99):", testList.remove(99));
// testList.printArray();
// console.log("remove middle (12):", testList.remove(12));
// testList.printArray();
// console.log("remove head (45):", testList.remove(45));
// testList.printArray();
// console.log("remove head (60):", testList.remove(60));
// testList.printArray();
// console.log("remove head and tail (74):", testList.remove(74));
// testList.printArray();

// console.log('contains 1:', testList.contains(1));
// console.log('contains 177:', testList.contains(177));
// console.log('contains 60:', testList.contains(60));
// console.log('contains 12:', testList.contains(12));
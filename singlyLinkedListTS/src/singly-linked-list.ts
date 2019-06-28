'use strict';

import Node = require('./singly-linked-list-node');
// import util = require('util');
// import { isEmptyBindingElement } from 'typescript';
// import { cursorTo } from 'readline';

// Node based implementation of a linked list where every node has only a reference to the next node
// Maintaining head and tail pointers make insertion at either head or tail a constant time operation
class SinglyLinkedList {
  private head: Node;
  private tail: Node;

  constructor() {
    this.head = null;
    this.tail = null;
  }
// Insertion in a linked list implicitly refers to adding a node to the tail
  add(value) { 
    this.addLast(value);
  }

  isEmpty() {
    return this.head === null;
  }

  addLast(value) {
    let n = new Node(value);

    if (this.isEmpty()) {
      this.head = n;
      this.tail = n;
    } 
    
    else {
      this.tail.next = n;
      this.tail = n;
    }
  }

  addFirst(value) {
    let n = new Node(value);

    if(this.isEmpty()) {
      this.head = n;
      this.tail = n;
    }

    else {
      n.next = this.head;
      this.head = n;
    }
  }

  addAfter(value, target) {

    if (this.isEmpty()) {return false;}
    
    let n = new Node(value);
    // target node is the only node in the list
    if (this.head.value === target && this.tail.value === target) {
      this.head.next = n;
      this.tail = n;
    }
    else if (this.tail.value === target) {
      this.tail.next = n;
      this.tail = n;
    }
    else {
      let curr = this.head;

      while (curr.next) {
        if (curr.value === target) {
          n.next = curr.next;
          curr.next = n;
        }
        curr = curr.next;
      }
    }
  }

  addBefore(value, target) {

    if (this.isEmpty()) {return false;}
    
    let n = new Node(value);
    // target node is the only node in the list
    if (this.head.value === target) {
      n.next = this.head;
      this.head = n;
    }
    else {
      let curr = this.head;
      let pre = this.head.next;
      while (curr.next) {
        if (pre.value === target) {
          n.next = curr.next;
          curr.next = n;
        }
        curr = pre;
        pre = pre.next;
      }
    }
  }

  contains(value) {
    let n = this.head;

    while (n && n.value !== value) {
      n = n.next;
    }
    if (!n) {
      return false;
    }
    return true;
  }

  toArray() {
    let n = this.head;
    let arr = [];

    while (n) {
      arr.push(n.value);
      n = n.next;
    }
    return arr;
  }

  toReverseArray() {
    return this.toArray().reverse();
  }

  removeLast() {
    if (this.isEmpty()) { return false; } // list is empty

    if  (this.head === this.tail) { // node to remove is the only node in the list
      this.head = null;
      this.tail = null;
    } else {

      let curr = this.head;
      while (curr.next !== this.tail) {
        curr = curr.next;
      }
      curr.next = null;
      this.tail = curr;
    }
  }

  removeFirst() {
    if (this.isEmpty()) { return false; } // list is empty

    if  (this.head === this.tail) { // node to remove is the only node in the list
      this.head = null;
      this.tail = null;
    } 
    
    else {
      this.head = this.head.next;
    }
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  remove(value) {
    
    if (this.isEmpty()) { return false; } // list is empty
    let n = this.head;

    if (n.value === value) {
      
      if  (this.head === this.tail) { // node to remove is the only node in the list
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next; // remove the head node
      }
    }
    
    while (n.next && n.next.value !== value) {
      n = n.next;
    }

    if (n.next) {

      if (n.next === this.tail) { // we are removing the tail node
      this.tail = n;
      }
      n.next = n.next.next; // remove node between head and tail
    }
    return false; // no node with that value in this list
  }

  print() {
    let n = this.head;

    while (n) {
      console.log(n.value);
      n = n.next;
    }
  }

  printArray() {
    
    console.log(this.toArray());
  }

//   printObject() {
//     console.log(util.inspect(this, {depth: this.length}));
//   }
}

export = SinglyLinkedList;


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


'use strict';

import Node = require('./singly-linked-list-node.js');
import util = require('util');

// Node based implementation of a linked list where every node has only a reference to the next node
class SinglyLinkedList {
  private head: Node;
  private tail: Node;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addLast(value) {
    let n = new Node(value);

    if(!this.head) {
      this.head = n;
      this.tail = n;
    } 
    
    else {
      this.tail.next = n;
      this.tail = n;
    }
  }

  print() {
    if(!this.head) {
      console.log('empty list');
      return null;
    }
    console.log(util.inspect(this, {depth: this.length}));
  }
}

export = SinglyLinkedList;

// let testList = new SinglyLinkedList();

// testList.addLast(1);
// testList.print();
// testList.addLast(45);
// testList.print();
// testList.addLast(60);
// testList.print();
// testList.addLast(12);
// testList.print();

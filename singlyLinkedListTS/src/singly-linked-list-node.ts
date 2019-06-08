'use strict';

class Node {
  value: any;
  next: Node;
  
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

export = Node;

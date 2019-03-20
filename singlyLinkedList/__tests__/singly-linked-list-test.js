'use strict';

let SinglyLinkedList = require('../singly-linked-list');

describe('singly linked list constructor', () => {

  it('will default null', () => {
    let expected = {head: null, tail: null};
    let result = new SinglyLinkedList();
    expect(expected).toEqual(result);
  });

  it('can handle arguments in the constructor', () => {
    let expected = {head: null, tail: null};
    let result = new SinglyLinkedList(1234);
    expect(expected).toEqual(result);
  });
});

// describe('addLast method', () => {
//   let expected = {}
// })

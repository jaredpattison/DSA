'use strict';

let SinglyLinkedList = require('../singly-linked-list.js');

describe('singly linked list class', () => {

  describe('constructor', () => {

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

  describe('addLast method', () => {

    it('can add a first node', () => {
      let node1 = {value: 9, next: null};
      let expected = {head: node1, tail: node1};
      let result = new SinglyLinkedList();
      result.addLast(9);
      expect(expected).toEqual(result);
    });

    it('can add a second node', () => {
      let node2 = {value: 10, next: null};
      let node1 = {value: 9, next: node2};
      let expected = {head: node1, tail: node2};
      let result = new SinglyLinkedList();
      result.addLast(9);
      result.addLast(10);
      expect(expected).toEqual(result);
    });

    it('can accept multiple parameters', () => {
      let node1 = {value: 6, next: null};
      let expected = {head: node1, tail: node1};
      let result = new SinglyLinkedList();
      result.addLast(6, 99);
      expect(expected).toEqual(result);
    });

    it('can accept no paramaters', () => {
      let node1 = {value: undefined, next: null};
      let expected = {head: node1, tail: node1};
      let result = new SinglyLinkedList();
      result.addLast();
      expect(expected).toEqual(result);
    });
  });
});

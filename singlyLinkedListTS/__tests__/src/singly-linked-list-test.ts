'use strict';

let SinglyLinkedList = require('../../src/singly-linked-list');

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

  describe('is empty method', () => {

    it('returns true for an empty list', () => {
      let list = new SinglyLinkedList;
      let result = list.isEmpty();

      expect(result).toBeTruthy();
    });

    it('returns false for a list with one node', () => {
      let list = new SinglyLinkedList;
      list.addFirst(8);
      let result = list.isEmpty();

      expect(result).toBeFalsy();
    });

    it('returns false for a list with one node', () => {
      let list = new SinglyLinkedList;
      list.addFirst(8);
      list.addFirst(6);
      list.addFirst(9);
      let result = list.isEmpty();

      expect(result).toBeFalsy();
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

  describe('addFirst method', () => {

    it('can add a first node', () => {
      let node1 = {value: 9, next: null};
      let expected = {head: node1, tail: node1};
      let result = new SinglyLinkedList();
      result.addFirst(9);
      expect(expected).toEqual(result);
    });

    it('can add a second node', () => {
      let node2 = {value: 10, next: null};
      let node1 = {value: 9, next: node2};
      let expected = {head: node1, tail: node2};
      let result = new SinglyLinkedList();
      result.addFirst(10);
      result.addFirst(9);
      expect(expected).toEqual(result);
    });

    it('can accept multiple parameters', () => {
      let node1 = {value: 6, next: null};
      let expected = {head: node1, tail: node1};
      let result = new SinglyLinkedList();
      result.addFirst(6, 99);
      expect(expected).toEqual(result);
    });

    it('can accept no paramaters', () => {
      let node1 = {value: undefined, next: null};
      let expected = {head: node1, tail: node1};
      let result = new SinglyLinkedList();
      result.addFirst();
      expect(expected).toEqual(result);
    });
  });

  describe('addAfter method', () => {

    it('returns false if list is empty', () => {
      let list = new SinglyLinkedList();
      let result = list.addAfter(7, 4);

      expect(result).toBeFalsy();
    });

    it('will add node after target node', () => {
      let node4 = {value: 7, next: null};
      let node3 = {value: 6, next: node4};
      let node2 = {value: 5, next: node3};
      let node1 = {value: 4, next: node2};
      let expected = {head: node1, tail: node4};

      let result = new SinglyLinkedList();
      result.add(4);
      result.add(5);
      result.add(7);
      result.addAfter(6, 5);
      
      expect(expected).toEqual(result);
    });

    it('can handle a list with only one node', () => {
      let node2 = {value: 6, next: null};
      let node1 = {value: 4, next: node2};
      let expected = {head: node1, tail: node2};

      let result = new SinglyLinkedList();
      result.add(4);
      result.addAfter(6, 4);

      expect(expected).toEqual(result);
    });

    it('will add node when target is head', () => {
      let node4 = {value: 7, next: null};
      let node3 = {value: 6, next: node4};
      let node2 = {value: 5, next: node3};
      let node1 = {value: 4, next: node2};
      let expected = {head: node1, tail: node4};

      let result = new SinglyLinkedList();
      result.add(4);
      result.add(6);
      result.add(7);
      result.addAfter(5, 4);
      
      expect(expected).toEqual(result);
    });

    it('will add node when target is tail', () => {
      let node4 = {value: 7, next: null};
      let node3 = {value: 6, next: node4};
      let node2 = {value: 5, next: node3};
      let node1 = {value: 4, next: node2};
      let expected = {head: node1, tail: node4};

      let result = new SinglyLinkedList();
      result.add(4);
      result.add(5);
      result.add(6);
      result.addAfter(7, 6);
      
      expect(expected).toEqual(result);
    });
  });

  
  describe('addBefore method', () => {

    it('returns false if list is empty', () => {
      let list = new SinglyLinkedList();
      let result = list.addBefore(7, 4);

      expect(result).toBeFalsy();
    });

    it('will add node Before target node', () => {
      let node4 = {value: 7, next: null};
      let node3 = {value: 6, next: node4};
      let node2 = {value: 5, next: node3};
      let node1 = {value: 4, next: node2};
      let expected = {head: node1, tail: node4};

      let result = new SinglyLinkedList();
      result.add(4);
      result.add(5);
      result.add(7);
      result.addBefore(6, 7);
      
      expect(expected).toEqual(result);
    });

    it('can handle a list with only one node', () => {
      let node2 = {value: 4, next: null};
      let node1 = {value: 6, next: node2};
      let expected = {head: node1, tail: node2};

      let result = new SinglyLinkedList();
      result.add(4);
      result.addBefore(6, 4);

      expect(expected).toEqual(result);
    });

    it('will add node when target is head', () => {
      let node4 = {value: 7, next: null};
      let node3 = {value: 6, next: node4};
      let node2 = {value: 5, next: node3};
      let node1 = {value: 4, next: node2};
      let expected = {head: node1, tail: node4};

      let result = new SinglyLinkedList();
      result.add(5);
      result.add(6);
      result.add(7);
      result.addBefore(4, 5);
      
      expect(expected).toEqual(result);
    });

    it('will add node when target is tail', () => {
      let node4 = {value: 7, next: null};
      let node3 = {value: 6, next: node4};
      let node2 = {value: 5, next: node3};
      let node1 = {value: 4, next: node2};
      let expected = {head: node1, tail: node4};

      let result = new SinglyLinkedList();
      result.add(4);
      result.add(5);
      result.add(7);
      result.addBefore(6, 7);
      
      expect(expected).toEqual(result);
    });
  });

  describe('contains method', () => {

    it('returns true for valid input', () => {
      let list = new SinglyLinkedList();
      list.addLast(8);
      list.addLast(7);
      list.addLast(6);
      let result = list.contains(7);

      let expected = true;

      expect(expected).toEqual(result);
    });

    
    it('returns false for invalid input', () => {
      let list = new SinglyLinkedList();
      list.addLast(8);
      list.addLast(7);
      list.addLast(6);
      let result = list.contains(13);

      let expected = false;

      expect(expected).toEqual(result);
    });

    
    it('can handle empty list', () => {
      let list = new SinglyLinkedList();
      let result = list.contains(7);

      let expected = false;

      expect(expected).toEqual(result);
    });
  });

  describe('toArray method', () => {

    it('returns an array with correct values', () => {
      let list = new SinglyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      list.add(4);
      const result = list.toArray();

      const expected = [ 1, 2, 3, 4];

      expect(result).toStrictEqual(expected);
    });

    it('can handle an empty list', () => {
      const list = new SinglyLinkedList();
      const result = list.toArray();

      const expected = [];

      expect(result).toStrictEqual(expected);
    });
  });
  describe('toReverseArray method', () => {

    it('returns an array with correct values', () => {
      let list = new SinglyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      list.add(4);
      const result = list.toReverseArray();

      const expected = [ 4, 3, 2, 1];

      expect(result).toStrictEqual(expected);
    });

    it('can handle an empty list', () => {
      const list = new SinglyLinkedList();
      const result = list.toReverseArray();

      const expected = [];

      expect(result).toStrictEqual(expected);
    });
  });

  describe('removeLast method', () => {
    
    it('removes the last item from the list', () => {
      const result = new SinglyLinkedList();
      result.add(1);
      result.add(2);
      result.add(3);
      result.add(4);
      result.add(0);
      result.removeLast();

      const node4 = {value: 4, next: null};
      const node3 = {value: 3, next: node4};
      const node2 = {value: 2, next: node3};
      const node1 = {value: 1, next: node2};
      const expected = {head: node1, tail: node4};

      expect(result).toEqual(expected);
    });

    it('can handle an empty list', () => {
      const result = new SinglyLinkedList();
      
      expect(result.removeLast()).toBeFalsy();
    });

    it('can handle a list with one node', () => {
      const result = new SinglyLinkedList();
      result.add(6);
      result.removeLast();

      const expected = {head: null, tail: null};

      expect(result).toEqual(expected);
    });
  });

  
  describe('removeFirst method', () => {
    
    it('removes the first item from the list', () => {
      const result = new SinglyLinkedList();
      result.add(0);
      result.add(1);
      result.add(2);
      result.add(3);
      result.add(4);
      result.removeFirst();

      const node4 = {value: 4, next: null};
      const node3 = {value: 3, next: node4};
      const node2 = {value: 2, next: node3};
      const node1 = {value: 1, next: node2};
      const expected = {head: node1, tail: node4};

      expect(result).toEqual(expected);
    });

    it('can handle an empty list', () => {
      const result = new SinglyLinkedList();
      
      expect(result.removeFirst()).toBeFalsy();
    });

    it('can handle a list with one node', () => {
      const result = new SinglyLinkedList();
      result.add(6);
      result.removeFirst();

      const expected = {head: null, tail: null};

      expect(result).toEqual(expected);
    });
  });

  describe('clear method', () => {

    it('removes all items from list', () => {
      const result = new SinglyLinkedList();
      result.add(0);
      result.add(1);
      result.add(2);
      result.add(3);
      result.add(4);
      result.clear();

      expect(result.isEmpty()).toBeTruthy();
    });

    it('can handle an empty list', () => {
      const result = new SinglyLinkedList();;
      result.clear();

      expect(result.isEmpty()).toBeTruthy();
    });
  });

  describe('remove method', () => {

    it('can remove head node', () => {
      let list = new SinglyLinkedList();
      list.addLast(8);
      list.addLast(7);
      list.addLast(6);
      list.remove(8);

      let expected = new SinglyLinkedList();
      expected.addLast(7);
      expected.addLast(6);
      
      expect(expected).toEqual(list);
    });

    it('can remove tail node', () => {
      let list = new SinglyLinkedList();
      list.addLast(8);
      list.addLast(7);
      list.addLast(6);
      list.remove(6);

      let expected = new SinglyLinkedList();
      expected.addLast(8);
      expected.addLast(7);
      
      expect(expected).toEqual(list);
    });

    it('can remove middle node', () => {
      let list = new SinglyLinkedList();
      list.addLast(8);
      list.addLast(7);
      list.addLast(6);
      list.remove(7);

      let expected = new SinglyLinkedList();
      expected.addLast(8);
      expected.addLast(6);
      
      expect(expected).toEqual(list);
    });

    it('can remove head and tail node', () => {
      let list = new SinglyLinkedList();
      list.addLast(6);
      list.remove(6);

      let expected = new SinglyLinkedList();
      
      expect(expected).toEqual(list);
    });

    it('can handle value not found', () => {
      let list = new SinglyLinkedList();
      list.addLast(8);
      list.addLast(7);
      list.addLast(6);
      list.remove(11);

      let expected = new SinglyLinkedList();
      expected.addLast(8);
      expected.addLast(7);
      expected.addLast(6);

      expect(expected).toEqual(list);
    });

    it('can handle empty list', () => {
      let list = new SinglyLinkedList();

      expect(list.remove(7)).toBeFalsy();
    });
  });

/*   ****************************************************************************************
      The following tests are commented out as Jest mocks currently not working in TypeScript
     ****************************************************************************************
*/

 /*  describe('print method', () => {
    it('can print multiple elements in correct order', () => {
      console.log = jest.fn();

      let list = new SinglyLinkedList();
      list.addLast(8);
      list.addLast(7);
      list.addLast(6);
      list.print();

      let expected1 = 8;
      let expected2 = 7;
      let expected3 = 6;

      expect(console.log.mock.calls[0][0]).toEqual(expected1);
      expect(console.log.mock.calls[1][0]).toEqual(expected2);
      expect(console.log.mock.calls[2][0]).toEqual(expected3);
    });

    it('can handle one element', () => {
      console.log = jest.fn();

      let list = new SinglyLinkedList();
      list.addLast(8);
      list.print();

      let expected = 8;

      expect(console.log.mock.calls[0][0]).toEqual(expected);
    });

    it('can handle zero elements', () => {
      console.log = jest.fn();

      let list = new SinglyLinkedList();
      list.print();

      let expected = undefined;

      expect(console.log.mock.calls[0]).toEqual(expected);
    });
  });

  describe('printArray method', () => {

    it('can print array of multiple elements in correct order', () => {
      console.log = jest.fn();

      let list = new SinglyLinkedList();
      list.addLast(8);
      list.addLast(7);
      list.addLast(6);
      list.printArray();

      let expected = [ 8, 7, 6 ];

      expect(console.log.mock.calls[0][0]).toEqual(expected);
    });

    it('can handle one element', () => {
      console.log = jest.fn();

      let list = new SinglyLinkedList();
      list.addLast(8);
      list.printArray();

      let expected = [ 8 ];

      expect(console.log.mock.calls[0][0]).toEqual(expected);
    });

    it('can handle zero elements', () => {
      console.log = jest.fn();

      let list = new SinglyLinkedList();
      list.printArray();

      let expected = [];

      expect(console.log.mock.calls[0][0]).toEqual(expected);
    });
  });

  describe('printObject method', () => {
    // The following test passes locally but fails in travis, ad 'x' prior to 'it' to skip, 'xit'
    it('can print object with multiple elements in correct order', () => {
      console.log = jest.fn();

      let list = new SinglyLinkedList();
      list.addLast(8);
      list.addLast(7);
      list.addLast(6);
      list.printObject();

      let expected = "SinglyLinkedList {\n  head:\n   Node {\n     value: 8,\n     next: Node { value: 7, next: Node { value: 6, next: null } } },\n  tail: Node { value: 6, next: null } }";

      expect(console.log.mock.calls[0][0]).toEqual(expected);
    });

    it('can handle one element', () => {
      console.log = jest.fn();

      let list = new SinglyLinkedList();
      list.addLast(8);
      list.printObject();

      let expected = "SinglyLinkedList {\n  head: Node { value: 8, next: null },\n  tail: Node { value: 8, next: null } }";

      expect(console.log.mock.calls[0][0]).toEqual(expected);
    });

    it('can handle zero elements', () => {
      console.log = jest.fn();

      let list = new SinglyLinkedList();
      list.printObject();

      let expected = "SinglyLinkedList { head: null, tail: null }";

      expect(console.log.mock.calls[0][0]).toEqual(expected);
    });
  }); */

});

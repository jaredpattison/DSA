'use strict';
var SinglyLinkedList = require('../../built/singly-linked-list');
describe('singly linked list class', function () {
    describe('constructor', function () {
        it('will default null', function () {
            var expected = { head: null, tail: null };
            var result = new SinglyLinkedList();
            expect(expected).toEqual(result);
        });
        it('can handle arguments in the constructor', function () {
            var expected = { head: null, tail: null };
            var result = new SinglyLinkedList(1234);
            expect(expected).toEqual(result);
        });
    });
    describe('addLast method', function () {
        it('can add a first node', function () {
            var node1 = { value: 9, next: null };
            var expected = { head: node1, tail: node1 };
            var result = new SinglyLinkedList();
            result.addLast(9);
            expect(expected).toEqual(result);
        });
        it('can add a second node', function () {
            var node2 = { value: 10, next: null };
            var node1 = { value: 9, next: node2 };
            var expected = { head: node1, tail: node2 };
            var result = new SinglyLinkedList();
            result.addLast(9);
            result.addLast(10);
            expect(expected).toEqual(result);
        });
        it('can accept multiple parameters', function () {
            var node1 = { value: 6, next: null };
            var expected = { head: node1, tail: node1 };
            var result = new SinglyLinkedList();
            result.addLast(6, 99);
            expect(expected).toEqual(result);
        });
        it('can accept no paramaters', function () {
            var node1 = { value: undefined, next: null };
            var expected = { head: node1, tail: node1 };
            var result = new SinglyLinkedList();
            result.addLast();
            expect(expected).toEqual(result);
        });
    });
    describe('addFirst method', function () {
        it('can add a first node', function () {
            var node1 = { value: 9, next: null };
            var expected = { head: node1, tail: node1 };
            var result = new SinglyLinkedList();
            result.addFirst(9);
            expect(expected).toEqual(result);
        });
        it('can add a second node', function () {
            var node2 = { value: 10, next: null };
            var node1 = { value: 9, next: node2 };
            var expected = { head: node1, tail: node2 };
            var result = new SinglyLinkedList();
            result.addFirst(10);
            result.addFirst(9);
            expect(expected).toEqual(result);
        });
        it('can accept multiple parameters', function () {
            var node1 = { value: 6, next: null };
            var expected = { head: node1, tail: node1 };
            var result = new SinglyLinkedList();
            result.addFirst(6, 99);
            expect(expected).toEqual(result);
        });
        it('can accept no paramaters', function () {
            var node1 = { value: undefined, next: null };
            var expected = { head: node1, tail: node1 };
            var result = new SinglyLinkedList();
            result.addFirst();
            expect(expected).toEqual(result);
        });
    });
    describe('addAfter method', function () {
        it('returns false if list is empty', function () {
            var list = new SinglyLinkedList();
            var result = list.addAfter(7, 4);
            expect(result).toBeFalsy();
        });
        it('will add node after target node', function () {
            var node4 = { value: 7, next: null };
            var node3 = { value: 6, next: node4 };
            var node2 = { value: 5, next: node3 };
            var node1 = { value: 4, next: node2 };
            var expected = { head: node1, tail: node4 };
            var result = new SinglyLinkedList();
            result.add(4);
            result.add(5);
            result.add(7);
            result.addAfter(6, 5);
            expect(expected).toEqual(result);
        });
        it('can handle a list with only one node', function () {
            var node2 = { value: 6, next: null };
            var node1 = { value: 4, next: node2 };
            var expected = { head: node1, tail: node2 };
            var result = new SinglyLinkedList();
            result.add(4);
            result.addAfter(6, 4);
            expect(expected).toEqual(result);
        });
        it('will add node when target is head', function () {
            var node4 = { value: 7, next: null };
            var node3 = { value: 6, next: node4 };
            var node2 = { value: 5, next: node3 };
            var node1 = { value: 4, next: node2 };
            var expected = { head: node1, tail: node4 };
            var result = new SinglyLinkedList();
            result.add(4);
            result.add(6);
            result.add(7);
            result.addAfter(5, 4);
            expect(expected).toEqual(result);
        });
        it('will add node when target is tail', function () {
            var node4 = { value: 7, next: null };
            var node3 = { value: 6, next: node4 };
            var node2 = { value: 5, next: node3 };
            var node1 = { value: 4, next: node2 };
            var expected = { head: node1, tail: node4 };
            var result = new SinglyLinkedList();
            result.add(4);
            result.add(5);
            result.add(6);
            result.addAfter(7, 6);
            expect(expected).toEqual(result);
        });
    });
    describe('addAfter method', function () {
        it('returns false if list is empty', function () {
            var list = new SinglyLinkedList();
            var result = list.addAfter(7, 4);
            expect(result).toBeFalsy();
        });
        // it('will add node after target node', () => {
        //   let node4 = {value: 7, next: null};
        //   let node3 = {value: 6, next: node4};
        //   let node2 = {value: 5, next: node3};
        //   let node1 = {value: 4, next: node2};
        //   let expected = {head: node1, tail: node4};
        //   let result = new SinglyLinkedList();
        //   result.add(4);
        //   result.add(5);
        //   result.add(7);
        //   result.addAfter(6, 5);
        //   expect(expected).toEqual(result);
        // });
        // it('can handle a list with only one node', () => {
        //   let node2 = {value: 6, next: null};
        //   let node1 = {value: 4, next: node2};
        //   let expected = {head: node1, tail: node2};
        //   let result = new SinglyLinkedList();
        //   result.add(4);
        //   result.addAfter(6, 4);
        //   expect(expected).toEqual(result);
        // });
        // it('will add node when target is head', () => {
        //   let node4 = {value: 7, next: null};
        //   let node3 = {value: 6, next: node4};
        //   let node2 = {value: 5, next: node3};
        //   let node1 = {value: 4, next: node2};
        //   let expected = {head: node1, tail: node4};
        //   let result = new SinglyLinkedList();
        //   result.add(4);
        //   result.add(6);
        //   result.add(7);
        //   result.addAfter(5, 4);
        //   expect(expected).toEqual(result);
        // });
        // it('will add node when target is tail', () => {
        //   let node4 = {value: 7, next: null};
        //   let node3 = {value: 6, next: node4};
        //   let node2 = {value: 5, next: node3};
        //   let node1 = {value: 4, next: node2};
        //   let expected = {head: node1, tail: node4};
        //   let result = new SinglyLinkedList();
        //   result.add(4);
        //   result.add(5);
        //   result.add(6);
        //   result.addAfter(7, 6);
        //   expect(expected).toEqual(result);
        // });
    });
    describe('is empty method', function () {
        it('returns true for an empty list', function () {
            var list = new SinglyLinkedList;
            var result = list.isEmpty();
            expect(result).toBeTruthy();
        });
        it('returns false for a list with one node', function () {
            var list = new SinglyLinkedList;
            list.addFirst(8);
            var result = list.isEmpty();
            expect(result).toBeFalsy();
        });
        it('returns false for a list with one node', function () {
            var list = new SinglyLinkedList;
            list.addFirst(8);
            list.addFirst(6);
            list.addFirst(9);
            var result = list.isEmpty();
            expect(result).toBeFalsy();
        });
    });
    describe('contains method', function () {
        it('returns true for valid input', function () {
            var list = new SinglyLinkedList();
            list.addLast(8);
            list.addLast(7);
            list.addLast(6);
            var result = list.contains(7);
            var expected = true;
            expect(expected).toEqual(result);
        });
        it('returns false for invalid input', function () {
            var list = new SinglyLinkedList();
            list.addLast(8);
            list.addLast(7);
            list.addLast(6);
            var result = list.contains(13);
            var expected = false;
            expect(expected).toEqual(result);
        });
        it('can handle empty list', function () {
            var list = new SinglyLinkedList();
            var result = list.contains(7);
            var expected = false;
            expect(expected).toEqual(result);
        });
    });
    describe('remove method', function () {
        it('can remove head node', function () {
            var list = new SinglyLinkedList();
            list.addLast(8);
            list.addLast(7);
            list.addLast(6);
            list.remove(8);
            var expected = new SinglyLinkedList();
            expected.addLast(7);
            expected.addLast(6);
            expect(expected).toEqual(list);
        });
        it('can remove tail node', function () {
            var list = new SinglyLinkedList();
            list.addLast(8);
            list.addLast(7);
            list.addLast(6);
            list.remove(6);
            var expected = new SinglyLinkedList();
            expected.addLast(8);
            expected.addLast(7);
            expect(expected).toEqual(list);
        });
        it('can remove middle node', function () {
            var list = new SinglyLinkedList();
            list.addLast(8);
            list.addLast(7);
            list.addLast(6);
            list.remove(7);
            var expected = new SinglyLinkedList();
            expected.addLast(8);
            expected.addLast(6);
            expect(expected).toEqual(list);
        });
        it('can remove head and tail node', function () {
            var list = new SinglyLinkedList();
            list.addLast(6);
            list.remove(6);
            var expected = new SinglyLinkedList();
            expect(expected).toEqual(list);
        });
        it('can handle value not found', function () {
            var list = new SinglyLinkedList();
            list.addLast(8);
            list.addLast(7);
            list.addLast(6);
            list.remove(11);
            var expected = new SinglyLinkedList();
            expected.addLast(8);
            expected.addLast(7);
            expected.addLast(6);
            expect(expected).toEqual(list);
        });
        it('can handle empty list', function () {
            var list = new SinglyLinkedList();
            list.remove(18);
            var expected = new SinglyLinkedList();
            expect(expected).toEqual(list);
        });
    });
    describe('print method', function () {
        it('can print multiple elements in correct order', function () {
            console.log = jest.fn();
            var list = new SinglyLinkedList();
            list.addLast(8);
            list.addLast(7);
            list.addLast(6);
            list.print();
            var expected1 = 8;
            var expected2 = 7;
            var expected3 = 6;
            expect(console.log.mock.calls[0][0]).toEqual(expected1);
            expect(console.log.mock.calls[1][0]).toEqual(expected2);
            expect(console.log.mock.calls[2][0]).toEqual(expected3);
        });
        it('can handle one element', function () {
            console.log = jest.fn();
            var list = new SinglyLinkedList();
            list.addLast(8);
            list.print();
            var expected = 8;
            expect(console.log.mock.calls[0][0]).toEqual(expected);
        });
        it('can handle zero elements', function () {
            console.log = jest.fn();
            var list = new SinglyLinkedList();
            list.print();
            var expected = undefined;
            expect(console.log.mock.calls[0]).toEqual(expected);
        });
    });
    describe('printArray method', function () {
        it('can print array of multiple elements in correct order', function () {
            console.log = jest.fn();
            var list = new SinglyLinkedList();
            list.addLast(8);
            list.addLast(7);
            list.addLast(6);
            list.printArray();
            var expected = [8, 7, 6];
            expect(console.log.mock.calls[0][0]).toEqual(expected);
        });
        it('can handle one element', function () {
            console.log = jest.fn();
            var list = new SinglyLinkedList();
            list.addLast(8);
            list.printArray();
            var expected = [8];
            expect(console.log.mock.calls[0][0]).toEqual(expected);
        });
        it('can handle zero elements', function () {
            console.log = jest.fn();
            var list = new SinglyLinkedList();
            list.printArray();
            var expected = [];
            expect(console.log.mock.calls[0][0]).toEqual(expected);
        });
    });
    // describe('printObject method', function () {
    //     // The following test passes locally but fails in travis, ad 'x' prior to 'it' to skip, 'xit'
    //     it('can print object with multiple elements in correct order', function () {
    //         console.log = jest.fn();
    //         var list = new SinglyLinkedList();
    //         list.addLast(8);
    //         list.addLast(7);
    //         list.addLast(6);
    //         list.printObject();
    //         var expected = "SinglyLinkedList {\n  head:\n   Node {\n     value: 8,\n     next: Node { value: 7, next: Node { value: 6, next: null } } },\n  tail: Node { value: 6, next: null } }";
    //         expect(console.log.mock.calls[0][0]).toEqual(expected);
    //     });
    //     it('can handle one element', function () {
    //         console.log = jest.fn();
    //         var list = new SinglyLinkedList();
    //         list.addLast(8);
    //         list.printObject();
    //         var expected = "SinglyLinkedList {\n  head: Node { value: 8, next: null },\n  tail: Node { value: 8, next: null } }";
    //         expect(console.log.mock.calls[0][0]).toEqual(expected);
    //     });
    //     it('can handle zero elements', function () {
    //         console.log = jest.fn();
    //         var list = new SinglyLinkedList();
    //         list.printObject();
    //         var expected = "SinglyLinkedList { head: null, tail: null }";
    //         expect(console.log.mock.calls[0][0]).toEqual(expected);
    //     });
    // });
});

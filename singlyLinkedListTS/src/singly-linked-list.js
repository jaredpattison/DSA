'use strict';
var Node = require("./singly-linked-list-node");
// import util = require('util');
// import { isEmptyBindingElement } from 'typescript';
// import { cursorTo } from 'readline';
// Node based implementation of a linked list where every node has only a reference to the next node
// Maintaining head and tail pointers make insertion at either head or tail a constant time operation
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.head = null;
        this.tail = null;
    }
    // Insertion in a linked list implicitly refers to adding a node to the tail
    SinglyLinkedList.prototype.add = function (value) {
        this.addLast(value);
    };
    SinglyLinkedList.prototype.isEmpty = function () {
        return this.head === null;
    };
    SinglyLinkedList.prototype.addLast = function (value) {
        var n = new Node(value);
        if (this.isEmpty()) {
            this.head = n;
            this.tail = n;
        }
        else {
            this.tail.next = n;
            this.tail = n;
        }
    };
    SinglyLinkedList.prototype.addFirst = function (value) {
        var n = new Node(value);
        if (this.isEmpty()) {
            this.head = n;
            this.tail = n;
        }
        else {
            n.next = this.head;
            this.head = n;
        }
    };
    SinglyLinkedList.prototype.addAfter = function (value, target) {
        if (this.isEmpty()) {
            return false;
        }
        var n = new Node(value);
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
            var curr = this.head;
            while (curr.next) {
                if (curr.value === target) {
                    n.next = curr.next;
                    curr.next = n;
                }
                curr = curr.next;
            }
        }
    };
    SinglyLinkedList.prototype.addBefore = function (value, target) {
        if (this.isEmpty()) {
            return false;
        }
        var n = new Node(value);
        // target node is the only node in the list
        if (this.head.value === target) {
            n.next = this.head;
            this.head = n;
        }
        else {
            var curr = this.head;
            var pre = this.head.next;
            while (curr.next) {
                if (pre.value === target) {
                    n.next = curr.next;
                    curr.next = n;
                }
                curr = pre;
                pre = pre.next;
            }
        }
    };
    SinglyLinkedList.prototype.contains = function (value) {
        var n = this.head;
        while (n && n.value !== value) {
            n = n.next;
        }
        if (!n) {
            return false;
        }
        return true;
    };
    SinglyLinkedList.prototype.toArray = function () {
        var n = this.head;
        var arr = [];
        while (n) {
            arr.push(n.value);
            n = n.next;
        }
        return arr;
    };
    SinglyLinkedList.prototype.toReverseArray = function () {
        return this.toArray().reverse();
    };
    SinglyLinkedList.prototype.removeLast = function () {
        if (this.isEmpty()) {
            return false;
        } // list is empty
        if (this.head === this.tail) { // node to remove is the only node in the list
            this.head = null;
            this.tail = null;
        }
        else {
            var curr = this.head;
            while (curr.next !== this.tail) {
                curr = curr.next;
            }
            curr.next = null;
            this.tail = curr;
        }
    };
    SinglyLinkedList.prototype.removeFirst = function () {
        if (this.isEmpty()) {
            return false;
        } // list is empty
        if (this.head === this.tail) { // node to remove is the only node in the list
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
        }
    };
    SinglyLinkedList.prototype.clear = function () {
        this.head = null;
        this.tail = null;
    };
    SinglyLinkedList.prototype.remove = function (value) {
        if (this.isEmpty()) {
            return false;
        } // list is empty
        var n = this.head;
        if (n.value === value) {
            if (this.head === this.tail) { // node to remove is the only node in the list
                this.head = null;
                this.tail = null;
            }
            else {
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
    };
    SinglyLinkedList.prototype.print = function () {
        var n = this.head;
        while (n) {
            console.log(n.value);
            n = n.next;
        }
    };
    SinglyLinkedList.prototype.printArray = function () {
        console.log(this.toArray());
    };
    return SinglyLinkedList;
}());
module.exports = SinglyLinkedList;

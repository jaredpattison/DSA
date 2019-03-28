'use strict';
var Node = require("./singly-linked-list-node.js");
var util = require("util");
// Node based implementation of a linked list where every node has only a reference to the next node
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.head = null;
        this.tail = null;
    }
    SinglyLinkedList.prototype.addLast = function (value) {
        var n = new Node(value);
        if (!this.head) {
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
    SinglyLinkedList.prototype.isEmpty = function () {
        return this.head === null;
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
    SinglyLinkedList.prototype.remove = function (value) {
        if (!this.head) {
            return false;
        } // list is empty
        var n = this.head;
        if (n.value === value) {
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            }
            else {
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
    SinglyLinkedList.prototype.print = function () {
        var n = this.head;
        while (n) {
            console.log(n.value);
            n = n.next;
        }
    };
    SinglyLinkedList.prototype.printArray = function () {
        var n = this.head;
        var arr = [];
        while (n) {
            arr.push(n.value);
            n = n.next;
        }
        console.log(arr);
    };
    SinglyLinkedList.prototype.printObject = function () {
        console.log(util.inspect(this, { depth: this.length }));
    };
    return SinglyLinkedList;
}());
module.exports = SinglyLinkedList;

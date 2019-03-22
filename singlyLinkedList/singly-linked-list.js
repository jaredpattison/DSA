'use strict';
exports.__esModule = true;
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
    SinglyLinkedList.prototype.print = function () {
        if (!this.head) {
            console.log('empty list');
            return null;
        }
        console.log(util.inspect(this, { depth: this.length }));
    };
    return SinglyLinkedList;
}());
module.exports = SinglyLinkedList;

// let testList = new SinglyLinkedList();

// testList.addLast(1);
// testList.print();
// testList.addLast(45);
// testList.print();
// testList.addLast(60);
// testList.print();
// testList.addLast(12);
// testList.print();

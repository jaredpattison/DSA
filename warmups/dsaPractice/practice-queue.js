'use strict';

let Queue = require('./lib/queue');

let q = new Queue();
q.enqueue(2);
q.enqueue(4);
q.enqueue(6);
q.enqueue(8);
q.enqueue(10);

const traverse = (queue) => {
  let item;
  while ((item = queue.dequeue())) {
    console.log(item);
  }
};

traverse(q);

const Queue = require('./queue');

const queue = new Queue();
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(6)
queue.dequeue();
console.log(queue.isEmpty());
queue.print();
console.log(queue.peek());
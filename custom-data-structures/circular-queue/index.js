const CircularQueue = require('./CircularQueue');

const queue = new CircularQueue(6);
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(6)
queue.dequeue();
console.log(queue.isEmpty());
queue.print();
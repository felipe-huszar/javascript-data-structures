const Stack = require('./stack.js');

const stack = new Stack();
stack.push(2);
stack.push(6);
stack.push(9);
stack.push(10);
stack.pop();
console.log(stack.isEmpty());
stack.print();
console.log(stack.peek());
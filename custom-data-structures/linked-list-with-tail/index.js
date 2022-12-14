const LinkedList = require('./LinkedList');

const list = new LinkedList();
console.log('List is empty? ', list.isEmpty());
console.log('List size ', list.getSize());

list.append(1);
list.append(3);
list.append(5);
console.log('List size ', list.getSize());
list.print();

list.append(10);
list.print();

list.removeFromFront();
list.print();

list.removeFromEnd();
list.print();
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

list.insert(20, 2);
list.print();

list.removeFrom(1);
list.print();

list.removeValue(20);
list.print();

console.log(list.search(10));

list.reverse();
list.print();
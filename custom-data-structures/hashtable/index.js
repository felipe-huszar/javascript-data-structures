const HashTable = require('./HashTable');

const table = new HashTable(50);

table.set('name', 'Bruce');
table.set('age', 25);
table.set('name', 'Diana')
table.display();
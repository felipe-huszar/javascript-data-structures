const BinarySearchTree = require('./BinarySearchTree');

const binarySearchTree = new BinarySearchTree();


binarySearchTree.insert(10);
binarySearchTree.insert(5);
binarySearchTree.insert(15);
console.log(binarySearchTree.isEmpty());

console.log(binarySearchTree.search(binarySearchTree.root, 5));
console.log(binarySearchTree.search(binarySearchTree.root, 20));


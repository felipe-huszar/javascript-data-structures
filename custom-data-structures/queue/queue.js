class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift() // pop the first element of the array
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {

        if(!this.isEmpty()) {
            return this.items[0];
        }
    }

    print() {
        console.log(this.items.toString());
    }
}

module.exports = Queue
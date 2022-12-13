class CircularQueue { 
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(element) {
        if(!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element
            this.currentLength++;
            if(this.front === -1) {
                this.front = this.rear;
            }
        }
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log("Queue is empty");
        }

        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength--;
        if(this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }    
    }

    peek() {
        if(!this.isEmpty()) {
            return this.items[this.front]
        }
    }

    print() {
        if(this.isEmpty()) {
            console.log("Queue is empty");
        }
        
        let i;
        for(i = this.front; i <= this.rear; i = (i+1) % this.capacity) {
            console.log(this.items[i]);
        }
    }
}

module.exports = CircularQueue;
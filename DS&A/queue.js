
// how is this implemented?
// using numbers as keys


class Queue{
    constructor() {
        this.values = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(val) {
        this.values[this.tail] = val;
        this.tail++;
    }

    dequeue() {
        let value = this.values[this.head];
        delete this.values[this.head];
        this.head++;
        return value;
    }

    peek() {
        return this.values[this.head];
    }

    getLength() {
        return this.tail - this.head;
    }
}

const queue = new Queue();
console.log(queue);

queue.enqueue(4);
queue.enqueue(2);
queue.enqueue(40);
queue.enqueue(10);

console.log(queue);
console.log(queue.dequeue());
queue.dequeue();
console.log(queue.peek(), 'peeking');
console.log(queue);

const queue2 = new Queue();
queue2.enqueue('chars');
queue2.enqueue('sentence');
console.log(queue2, 2);
console.log(queue, 1)
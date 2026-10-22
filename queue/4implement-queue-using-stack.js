var myQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};

myQueue.prototype.enqueue = function (x) {
    this.stack1.push(x);
};

myQueue.prototype.dequeue = function () {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }

    return this.stack2.pop();
};

myQueue.prototype.front = function () {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }

    return this.stack2[this.stack2.length - 1];
};

myQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0;
};

const queue = new myQueue();

queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log(queue.front());   // 4
console.log(queue.dequeue()); // 4
console.log(queue.front());   // 5
console.log(queue.dequeue()); // 5
console.log(queue.empty());   // false


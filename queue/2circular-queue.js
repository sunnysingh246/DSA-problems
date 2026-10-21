var MyCircularQueue = function (k) {
    this.queue = [];
    this.size = k;
};


MyCircularQueue.prototype.enqueue = function (value) {
    if (this.size === this.queue.length) return false
    this.queue.push(value)
    return true;
};


MyCircularQueue.prototype.dequeue = function () {
    if (this.queue.length === 0) return false
    this.queue.shift()
    return true;
};


MyCircularQueue.prototype.Front = function () {
    if (this.queue.length === 0) return -1
    return this.queue[0]
};


MyCircularQueue.prototype.Rear = function () {
    if (this.queue.length === 0) return -1
    return this.queue[this.queue.length - 1]
};


MyCircularQueue.prototype.isEmpty = function () {
    return this.queue.length === 0
};


MyCircularQueue.prototype.isFull = function () {
    return this.size === this.queue.length
};


var obj = new MyCircularQueue(3)
obj.enqueue(1);
obj.enqueue(2);
obj.enqueue(3);
obj.dequeue();
console.log(obj.Front(), obj.Rear())
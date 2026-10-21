class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(elements) {
        this.queue.push(elements);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "underflow, cannot perform dequeue";
        }
        return this.queue.shift()
    }

    isEmpty() {
        return this.size() === 0
    }

    front() {
        if (this.queue.isEmpty()) {
            return "No elements in the queue"
        }
        return this.queue[0]
    }

    size() {
        return this.queue.length
    }

    printQueue() {
        let queueString = "";
        for (let i = 0; i < this.size(); i++) {
            queueString += this.queue[i] + ",";
        }
        console.log("Queue:" + queueString)
    }
}

const myQueue = new Queue;

myQueue.enqueue(5)
myQueue.enqueue(7)
myQueue.enqueue(3)
myQueue.enqueue(9)

console.log(myQueue.printQueue())   //5,7,3,9
console.log(myQueue.dequeue())      //5
console.log(myQueue.printQueue())   //7,3,9
console.log(myQueue.printQueue())   //7,3,9
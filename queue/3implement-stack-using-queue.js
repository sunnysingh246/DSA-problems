var myStack = function () {
    this.q1 = []
    this.q2 = []
}


myStack.prototype.push = function (x) {
    while (this.q1.length !== 0) {
        this.q2.push(this.q1.shift())
    }
    this.q1.push(x)
    while (this.q2.length !== 0) {
        this.q1.push(this.q2.shift())
    }
}


myStack.prototype.pop = function () {
    return this.q1.shift()
}


myStack.prototype.top = function () {
    return this.q1[0]
}


myStack.prototype.empty = function () {
    return this.q1.length === 0
}

var stack = new myStack()

stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7) 

stack.pop()

console.log(stack.top())
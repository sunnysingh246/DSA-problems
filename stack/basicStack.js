//basic stack implementation

class Stack {
    constructor() {
        this.stack = []
    }
    push(element) {
        this.stack.push(element)
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty"
        }
        return this.stack.pop()
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty"
        }
        else {
            return this.stack[this.size - 1]
        }
    }

    isEmpty() {
        return this.size === 0
    }

    size() {
        return this.stack.length
    }

    printStack(){
        
    }
}


const stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.peek())
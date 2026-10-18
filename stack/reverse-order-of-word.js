//input :"Hello world"     ----->>> output:"world Hello"

function reverseStack(s) {
    const splitS = s.split(" ")
    const stack = []

    for (let i of splitS) {
        stack.push(i)
    }

    let reversed = []

    while (stack.length > 0) {
        reversed.push(stack.pop())
    }

    return reversed.join(" ")
}

console.log(reverseStack(("I love JavaScript")))
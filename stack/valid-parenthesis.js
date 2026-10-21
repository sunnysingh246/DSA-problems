function isValidParenthesis(s) {
    const stack = [];
    const pairs = {
        ")": "(", "}": "{", "]": "["
    }

    for (const char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char)
        } else if (char in pairs) {
            if (stack.pop() !== pairs[char]) return false
        }
    }

    return stack.length === 0
}

// function isEmpty(stack) {
//     return stack.length === 0;
// }

const string1 = "([]{})";
const string2 = "(]{})";
console.log(isValidParenthesis(string1))  //true
console.log(isValidParenthesis(string2))  //false
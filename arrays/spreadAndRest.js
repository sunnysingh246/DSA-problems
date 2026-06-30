let num = [2, 3, 4, 5]
let num2 = [6, 7, 8, 9]

const allNums = [...num, ...num2]     //spread operator

console.log(allNums)


function sum(...numbers) {       //rest operator
    return numbers
}

console.log(sum(num,num2))
function findSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum
}

let n = 10
console.log(findSum(n))
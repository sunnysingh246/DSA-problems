//kaden's algorithm

function maxSum(num) {
    let sum = 0
    let max = num[0]

    for (let i = 0; i <= num.length; i++) {  //O(n)
        sum += num[i]
        if (sum > max) { max = sum }
        if (sum < 0) { sum = 0 }
    }
    return max
}

console.log(maxSum([-2, 1 - 3, 4, -1, 2, 1, -5, 4]));

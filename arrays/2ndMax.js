function secondMax(arr) {
    arr.sort((a, b) => b - a)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return arr[i]
        }

    }
    return null;
}

console.log(secondMax([10, 20, 4, 45, 99])); // 45



/////other method///////

let arr2 = [44, 66, 34, 21, 5, 64, 23, 23];

let max = Math.max(arr2[0], arr2[1])
let secMax = Math.min(arr2[0], arr2[1])

for (let i = 2; i < arr2.length; i++) {
    if (arr2[i] > max) {
        secMax = max
        max = arr2[i]
    } else if (arr2[i] > secMax && max !== arr[i]) {
        secMax = arr2[i]
    }
}

console.log(secMax)
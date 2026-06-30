let arr = [33, 43, 12, 42, 45, 53, 13]
let temp = []

for (let i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i])
}

console.log(temp)



//////2nd method////////

let arr2 = [23, 43, 22, 42, 2, 12, 3]

let i = 0, j = arr2.length - 1;
while (i != j) {
    let temp = arr2[i]
    arr2[i] = arr2[j]
    arr2[j] = temp
    i++
    j--
}

console.log(arr2)
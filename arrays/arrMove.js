let arr = [33, 43, 12, 42, 45, 53, 13]

let copy = arr[0]
for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]
}

arr[arr.length - 1] = copy
console.log(arr)
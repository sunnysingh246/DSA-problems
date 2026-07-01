let arr = [33, 43, 12, 42, 45, 53, 13]

let copy = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1]
}
arr[0] = copy

console.log(arr)
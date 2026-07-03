let arr = [2, 4, 6, 1, 7, 9, 5, 3]

let count1 = 0;
let count2 = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) count1++
    if (arr[i] % 2 != 0) count2++
}
console.log(count1, count2)
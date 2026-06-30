let arr = [44, 44, 34, 21, 44, 64, 44, 23];
let target = 44;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target)
        count++
}

console.log(count)
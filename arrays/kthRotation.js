// let arr = [33, 43, 12, 42, 45, 53, 13]

// let k = 3
// k = k % arr.length

// for (let j = 0; j < k; j++) {
//     let copy = arr[0]

//     for (let i = 0; i < arr.length - 1; i++) {
//           arr[i] = arr[i + 1]
//     }

//     arr[arr.length-1]=copy
// }

// console.log(arr)


//2nd method

let arr = [33, 43, 12, 42, 45, 53, 13]
let temp = new Array(arr.length)
let k = 3
k = k % arr.length

for (i = 0; i < arr.length; i++) {
    temp[i] = arr[(i + k) % arr.length]
}
console.log(temp)
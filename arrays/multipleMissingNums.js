// function findMissingNumbers(arr) {
//     let missing = []

//     for (let i = 0; i <= arr[arr.length - 1]; i++) {
//         if (!arr.includes(i)) {
//             missing.push(i)
//         }
//     }
//     return missing
// }

// console.log(findMissingNumbers([1, 2, 5, 6, 8]));


//2nd method

function findMissingNumbers(arr) {
    let n = Math.max(...arr);
    let set = new Set(arr);
    let missing = [];

    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) {
            missing.push(i);
        }
    }

    return missing;
}

const arr = [1, 2, 5, 6, 8];

console.log(findMissingNumbers(arr));
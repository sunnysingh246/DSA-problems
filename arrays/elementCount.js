function countElement(array, target){
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) count++
    }
    return count
}

const arr = [44, 44, 34, 21, 44, 64, 44, 23];

console.log(countElement(arr, 44));
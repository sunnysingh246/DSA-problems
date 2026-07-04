//[1,2,3,5]
//output 4

function findMissingNumber(arr) {
    let actualSum = 0;
    let n = arr.length + 1;
    let expectedSum = n * (n + 1) / 2;

    for (let i = 0; i < arr.length; i++) {
        actualSum= actualSum+ arr[i]
    }
    return expectedSum - actualSum
}

const arr = [1, 2, 4, 5];

console.log(findMissingNumber(arr));
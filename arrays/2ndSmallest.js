function secondMax(arr) {
    arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return arr[i]
        }

    }
    return null;
}

//console.log(secondMax([10, 20, 4, 45, 99])); // 45




//2nd approach
function secondLargest(arr) {
    const uniqueArr = Array.from(new Set(arr))          //new Set(arr)=> give onject
    //Array.from(new Set(arr))

    uniqueArr.sort((a, b) => {
        return b - a
    })
    if (uniqueArr.length >= 2) return uniqueArr[1]
    else {
        return -1
    }
}

//console.log(secondLargest([2, 1, 4, 1, 2, 62, 54, 3]))



//Optimized apporach
function secondLargestOptimized(arr) {
    let first = -Infinity
    let second = -Infinity

    for (let num in arr) {
        if (num > first) {
            second = first
            first = num
        } else if (num > second && num < first) {
            second = num
        }
    }
    return second === -Infinity ? null : second
}

console.log(secondLargestOptimized([3, 1, 4, 1, 5, 9, 2, 6])); // 6
console.log(secondLargestOptimized[5, 5, 5]);                // null (no distinct second max)
console.log(secondLargestOptimized([10]));
//time complexity  ->O(n)
//space complexity ->O(1)
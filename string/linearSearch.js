const linearSearch = function (arr, targert) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == targert) {
            return i
        }
    }
    return -1
}

//console.log(linearSearch([1, 3, 5, 7, 3, 9, 0], 5))




//Global Linear search
const globalLinearSearch = function (arr, targert) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (targert === arr[i]) {
            result.push(i)
        }
    }
    if (result.length === 0) result - 1
    return result
}

console.log(globalLinearSearch([1, 3, 0, 5, 7, 3, 9, 0], 0))
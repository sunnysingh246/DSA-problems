const linearSearch = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return i
        }
    }
    return -1
}

// console.log(linearSearch([1, 3, 6, 8, 4, 0], 8))
// console.log(linearSearch([1, 3, 6, 8, 4, 0], 5))



//GLOBAL LINEAR SEARCH
const globalLinearSearch = (nums, target) => {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            result.push(i)
        }
    }
    if (result.length === 0) return -1
    return result
}

console.log(globalLinearSearch([1, 3, 0, 6, 8, 4, 0], 0))
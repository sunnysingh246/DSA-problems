// Brute force alternative (O(n)) — simpler but slower on large inputs
function maximumCountBruteForce(nums) {
    let neg = 0, pos = 0
    for (const x of nums) {
        if (nums < 0) neg++
        else if (nums > 0) pos++
    }

    return Math.max(pos, neg)
}

console.log(maximumCountBruteForce([-1, -3, 4, 5, -2, -6, 8]))




//optimized approach
function maximumCount(nums) {
    return Math.max(negCount(nums), posCount(nums))
}

// count of negative numbers = index of first element >= 0
function negCount(nums) {
    let low = 0, high = nums.length - 1
    let result = nums.length // if all are negative

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] >= 0) {
            result = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return result
}

// count of positive numbers = n - (index of first element > 0)
function posCount(nums) {
    let low = 0, high = nums.length - 1
    let result = nums.length // if none are positive

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] > 0) {
            result = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return nums.length - result
}

console.log(maximumCount([-2, -1, -1, 1, 2, 3])) // 3
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])) // 3
console.log(maximumCount([5, 20, 66, 1314])) // 4
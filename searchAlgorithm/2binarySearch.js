function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)

        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;

}

console.log(binarySearch([1, 4, 7, 9, 10, 15], 1))
console.log(binarySearch([1, 4, 7, 9, 10, 15], 9))
console.log(binarySearch([1, 4, 7, 9, 10, 15], 5))
var findKthPositive = function(arr, k) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        let missing = arr[middle] - (middle + 1);

        if (missing < k) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return start + k;
};

console.log(findKthPositive([1, 4, 7, 9, 10, 13], 2));
console.log(findKthPositive([1, 4, 7, 9, 10, 13], 7));


function findMissingNumbers(arr) {
    let missing = []

    for (let i = 0; i <= arr[arr.length - 1]; i++) {
        if (!arr.includes(i)) {
            missing.push(i)
        }
    }
    return missing
}

console.log(findMissingNumbers([1, 2, 5, 6, 8]));

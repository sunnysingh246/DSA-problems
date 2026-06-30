function secondMax(arr) {
    arr.sort((a, b) => a-b)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return arr[i]
        }

    }
    return null;
}

console.log(secondMax([10, 20, 4, 45, 99])); // 45



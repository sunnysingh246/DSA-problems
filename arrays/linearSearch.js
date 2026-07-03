function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) return 1
    }
    return -1
}

const arr = [10, 20, 30, 40, 50];

console.log(linearSearch(arr, 40));
console.log(linearSearch(arr, 70));
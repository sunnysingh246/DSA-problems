const selectionSOrt = (arr) => {
    const n = arr.length

    for (let i = 0; i < n - 1; i++) {
        let minINdex = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minINdex]) {
                minINdex = j;
            }
        }
        if (minINdex !== i) {
            [arr[i], arr[minINdex]] = [arr[minINdex], arr[i]];
        }
    }
    return arr
}

console.log(selectionSOrt([23, 4, 58, 64, 23]))
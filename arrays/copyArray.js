function copyArray(arr1) {
    let arr2 = [];

    for (let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i]);
    }

    return arr2;
}

const arr1 = [10, 20, 30, 40, 50];

const arr2 = copyArray(arr1);

console.log(arr2);
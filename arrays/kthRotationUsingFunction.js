let arr = [23, 42, 12, 53, 56, 12, 16]
let k=3
k=k%arr.length

reverse(0,k-1)
reverse(k,k-1)
reverse(0,arr.length-1)
console.log(arr)

function reverse(i, j) {
    while (i < j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}


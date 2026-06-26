class Solution {
    issorted(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false
            }
        }
        return true
    }
}
const obj = new Solution();
console.log(obj.issorted([23, 5, 3, 63, 7, 32, 5]));


function isPalindrome(num) {
    if (num < 0) return false

    let originalNum = num
    let reversed = 0

    while (num > 0) {
        let digit = num % 10
        reversed = reversed * 10 + digit
        num = Math.floor(num / 10)
    }

    return originalNum = reversed
}

console.log(isPalindrome(123));   // false
console.log(isPalindrome(1221));  // true
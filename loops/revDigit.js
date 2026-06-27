function revDigit(num) {
    let reversed = 0;
    let originalNum = num

    while (num > 0) {

        let digit = num % 10
        reversed = reversed * 10 + digit
        num = Math.floor(num / 10)
    }

    return originalNum = reversed
}

console.log(revDigit(123));
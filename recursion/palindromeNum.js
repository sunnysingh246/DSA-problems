function reverseNumber(num, reversed = 0) {

    if (num === 0) {
        return reversed;
    }

    let digit = num % 10;

    reversed = reversed * 10 + digit;

    return reverseNumber(Math.floor(num / 10), reversed);
}

function isPalindrome(num) {
    if (num < 0) {
        return false;
    }

    return num === reverseNumber(num);
}

console.log(isPalindrome(121));   // true
console.log(isPalindrome(123));   // false

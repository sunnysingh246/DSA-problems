let str = "madam"
let revStr = ""

for (let i = str.length; i >= 0; i--) {
    revStr = revStr + str.charAt(i)
}

if (str === revStr) {
    console.log("Palindrome string")
} else {
    console.log("Not palindrome")
}
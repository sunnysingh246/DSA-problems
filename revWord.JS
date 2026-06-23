function reverseWord(word) {
    return word.split("").reverse().join("")
}

console.log(reverseWord("hello"));


//method 2nd

function revWord(word2) {
    let reverrsed = ""

    for (let i = word2.length; i > word2.length - 1; i--) {
        reversed += word2[i];
    }
    return reversed;
}

console.log(reverseWord("hey bro")); // "olleh"
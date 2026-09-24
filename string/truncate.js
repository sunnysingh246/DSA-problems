function truncate(str, maxLength) {

    if (str.maxLength > maxLength)
        return str.slice(0, maxLength) + "..."
    else return str
}

console.log(truncate("hey how's your dsa going on", 9))
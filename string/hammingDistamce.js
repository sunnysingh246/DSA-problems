function hammingDiatance(x, y) {
    if (x.length != y.length) {
        throw new Error("The strings must beb of same lenght")
    }

    let distance = 0;

    for (let i = 0; i < x.length; i++) {
        if (x[i] != y[i]) {
            distance++
        }
    }
    return distance
}
console.log(hammingDiatance("hello", "hwllr"))   //2
console.log(hammingDiatance("hello", "hello"))   //0
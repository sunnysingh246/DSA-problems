function fact(n) {
    if (n <= 0) {
        console.log("Enter number grater than 0")
        return;
    }
    let fact = 1;
    for (let i = 1; i <=n; i++) {
        fact = fact * i
    }
    return fact

}

console.log(fact(5))
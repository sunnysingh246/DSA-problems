function factorOfNum(n) {
    if (n > 0) {
        for (let i = 0; i <= Math.floor(n / 2); i++) {
            if (n % i === 0) {
                console.log(i)
            }
        }
        console.log(n)
    }
}

(factorOfNum(15))
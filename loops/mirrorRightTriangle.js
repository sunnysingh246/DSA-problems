let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";

    // Print spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Print stars
    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}
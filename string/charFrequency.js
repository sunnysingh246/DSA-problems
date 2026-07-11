let str = "programming";

let freq = {};

for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
}

for (let key in freq) {
    if (freq[key] > 1) {
        console.log(key, freq[key]);
    }
}
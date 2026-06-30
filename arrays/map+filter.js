const nums = [1, 2, 3, 4, 5, 6];

const result = nums
    .filter(num => num % 2 === 0)
    .map(num => num * num);

console.log(result);


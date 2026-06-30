const nums = [3, 4, 5, 6, 73, 23, 23, 53]

const newNums = nums.map((item, index, array) => {
    return item + 4
})

console.log(newNums)






///////////////////////////////////

const names = ["john", "alice", "bob"];

const upper = names.map(name => name.toUpperCase());

console.log(upper);
// ["JOHN", "ALICE", "BOB"]
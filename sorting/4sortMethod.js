//sort() method in javascript

const fruit = ["dragon fruit", "apple", "banana", "date", "cherry"];
console.log(fruit.sort());

const nums = [10, 21, 23, 8, 5, 64]

const compare = (a, b) => {
    return a - b
}
console.log(nums.sort(compare))


const people = [

    {
        "name": "Rahul",
        "age": 22
    },
    {
        "name": "Priya",
        "age": 24
    },
    {
        "name": "Amit",
        "age": 21
    },
    {
        "name": "Sneha",
        "age": 23
    }

]

const compareForObject = (a, b) => {
    return a.age - b.age
}
console.log(people.sort(compareForObject))
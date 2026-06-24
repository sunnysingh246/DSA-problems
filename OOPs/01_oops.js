class car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    showDetails() {
        return `the car is ${this.brand} and ${this.model}`
    }
}

const car1 = new car("BMW", "M5");
const car2 = new car("Honda", "Civic");


console.log(car1.showDetails());
console.log(car2.showDetails());
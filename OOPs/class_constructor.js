class car {
    constructor(name, model, year) {
        this.name = name;
        this.year = year;
        this.model = model;
    }
    getCarInfo() {
        return `${this.name} ${this.model} ${this.year}`
    }
}
let myCar = new car('Honda', 'Civic', 2022);
console.log(myCar.getCarInfo());
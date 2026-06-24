function Car(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.getCarInfo = function () {
        return `${this.name} ${this.model} ${this.year}`
    }
}
let myCar = new Car('Toyota', 'Camry', 2020)
console.log(myCar.getCarInfo())
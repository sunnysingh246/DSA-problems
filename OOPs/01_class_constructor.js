class Person {
    constructor(name, age, proffession) {
        this._name = name;
        this._age = age;
        this._proffession = proffession
    }
    sayHello() {
        console.log(`hey am ${this._name} am a ${this._proffession}`)
    }
}

const person1 = new Person("John", 23, "Developer")
person1.sayHello();
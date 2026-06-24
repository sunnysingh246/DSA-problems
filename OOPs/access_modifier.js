class person {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log(`hey iam ${this.name}`)
    }
}
const person1 = new person("john")
person1.introduce();
console.log(person1.name)
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Name: ${this.name}`);
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log(`meo meo`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log(`gau gau`);
    }
}
let dog = new Dog("Dog");
dog.printName();
dog.makeNoise();
let cat = new Cat("Cat");
cat.printName();
cat.makeNoise();

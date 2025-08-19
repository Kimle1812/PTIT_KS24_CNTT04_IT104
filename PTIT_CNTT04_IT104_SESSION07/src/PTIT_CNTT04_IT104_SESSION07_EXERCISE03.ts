 abstract class Animal {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeNoise(): void;
    printName(): void{
        console.log(`Name: ${this.name}`);
    }
}
class Dog extends Animal{
    makeNoise(): void {
        console.log(`meo meo`);
    }
}
class Cat extends Animal{
    makeNoise(): void {
        console.log(`gau gau`);
    }
}
let dog = new Dog("Dog");
dog.printName();
dog.makeNoise();
let cat = new Cat("Cat");
cat.printName();
cat.makeNoise();
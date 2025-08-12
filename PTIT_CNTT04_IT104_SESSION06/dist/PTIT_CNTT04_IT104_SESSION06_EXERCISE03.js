class CAnimal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} đang di chuyển`);
    }
}
class Dog extends CAnimal {
    constructor(name) {
        super(name);
    }
    move1() {
        console.log(`${this.name} đang chạy`);
    }
}
let dog = new Dog("Chó");
dog.move();
dog.move1();

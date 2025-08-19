abstract class CAnimal {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(): void {// Method thông thường có phần thân và không bắt buộc lớp con triển khai
        console.log(`${this.name} đang di chuyển`);
    }
    abstract move1(): void;// Phương thức trừu tượng không có phần thân và bắt buộc lớp con phải triển khai
}

class Dog extends CAnimal {
    constructor(name: string) {
        super(name);
    }
    move1(): void {
        console.log(`${this.name} đang chạy`);
    }
}
let dog = new Dog("Chó");
dog.move();
dog.move1();
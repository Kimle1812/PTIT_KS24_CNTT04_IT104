class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(speeds) {
        this.speed -= speeds;
        if (this.speed < 0) {
            console.log(`Tốc độ giảm không thể nhỏ hơn tốc độ hiện tại`);
        }
    }
    speedUp(speeds) {
        this.speed += speeds;
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại của xe ${this.name} là: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Xe đạp: ${this.name}, Tốc độ: ${this.speed}, ID: ${this.id}, Số bánh răng: ${this.gear}`);
    }
}
let vehicle = new Vehicle("Xe máy", 60, 1);
vehicle.slowDown(20);
vehicle.showSpeed();
vehicle.speedUp(30);
vehicle.showSpeed();
let bicycle = new Bicycle("Xe đạp thể thao", 20, 2, 5);
bicycle.showInfo();

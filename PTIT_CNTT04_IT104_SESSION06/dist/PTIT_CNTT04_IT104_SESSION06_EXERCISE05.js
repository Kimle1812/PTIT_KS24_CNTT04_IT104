class Vehicle {
    constructor(speed) {
        this.speed = 0;
        this.speed = speed;
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`Tốc độ hiện tại: ${this.speed} km/h`);
    }
    slowDown(amount) {
        if (this.speed - amount < 0) {
            console.log("Tốc độ không thể nhỏ hơn 0");
        }
        else {
            this.speed -= amount;
            console.log(`Tốc độ hiện tại: ${this.speed} km/h`);
        }
    }
    stop() {
        this.speed = 0;
        console.log("Phương tiện đã dừng lại.");
    }
}
let vehicle = new Vehicle(50);
vehicle.speedUp(20);
vehicle.slowDown(30);
vehicle.slowDown(50);
vehicle.stop();

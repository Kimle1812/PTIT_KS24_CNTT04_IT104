interface changeSpeed {
    speedUp(amount: number):void;
    slowDown(amount: number): void;
    stop(): void;
}
class Vehicle implements changeSpeed {
    private speed : number = 0;
    constructor(speed: number) {
        this.speed = speed;
    }
    speedUp(amount: number): void {
        this.speed += amount;
        console.log(`Tốc độ hiện tại: ${this.speed} km/h`);
    }
    slowDown(amount: number): void {
        if (this.speed - amount < 0) {
            console.log("Tốc độ không thể nhỏ hơn 0");
        }else {
            this.speed -= amount;
            console.log(`Tốc độ hiện tại: ${this.speed} km/h`);
        }
    }
    stop(): void {
        this.speed = 0;
        console.log("Phương tiện đã dừng lại.");
    }
}
let vehicle = new Vehicle(50);
vehicle.speedUp(20);
vehicle.slowDown(30);
vehicle.slowDown(50);
vehicle.stop();


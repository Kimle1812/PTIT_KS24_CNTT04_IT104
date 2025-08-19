class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(speeds: number): void{
        this.speed -= speeds;
        if (this.speed < 0) {
            console.log(`Tốc độ giảm không thể nhỏ hơn tốc độ hiện tại`);
        }

    }
    speedUp(speeds: number): void {
        this.speed += speeds;

    }
    showSpeed(): void {
        console.log(`Tốc độ hiện tại của xe ${this.name} là: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    gear: number;
    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo(): void {
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
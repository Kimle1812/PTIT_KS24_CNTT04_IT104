class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectanglee {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
let circle = new Circle(5);
let rectanglee = new Rectanglee(10, 20);
console.log(`Diện tích hình tròn: ${circle.calculateArea().toFixed(2)}`);
console.log(`Chu vi hình tròn: ${circle.calculatePerimeter().toFixed(2)}`);
console.log(`Diện tích hình chữ nhật: ${rectanglee.calculateArea()}`);
console.log(`Chu vi hình chữ nhật: ${rectanglee.calculatePerimeter()}`);

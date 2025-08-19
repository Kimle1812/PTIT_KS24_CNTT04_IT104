class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    showInfo() {
        console.log(`Tên: ${this.name}, Năm sản xuất: ${this.year}, Hãng: ${this.company}`);
    }
}
let vehicle1 = new Vehicle("BWW", 2025, "BMW");
let vehicle2 = new Vehicle("Porcher", 2023, "Porsche");
vehicle1.showInfo();
vehicle2.showInfo();

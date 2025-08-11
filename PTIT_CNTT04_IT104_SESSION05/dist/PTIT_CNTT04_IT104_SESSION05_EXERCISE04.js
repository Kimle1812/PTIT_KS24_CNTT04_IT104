class Vehicle1 {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printVehicle() {
        console.log(`ID: ${this.id}`);
        console.log(`Tên phương tiện: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng xe: ${this.company}`);
    }
}
let v1 = new Vehicle1(1, "BWW", 2020, "BWW");
v1.printVehicle();

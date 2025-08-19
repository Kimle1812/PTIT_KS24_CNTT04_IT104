class Vehicle1 {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;

    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }

    public printVehicle(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Tên phương tiện: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng xe: ${this.company}`);
    }
}

let v1 = new Vehicle1 (1, "BWW", 2020, "BWW");
v1.printVehicle();

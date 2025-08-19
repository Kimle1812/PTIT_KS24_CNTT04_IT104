class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Tên nhân viên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.phone}`);
    }
}
let employee1 = new Employee("Nguyễn Văn A", "FPT Software", "0901234567");
employee1.printInfo();
let employee2 = new Employee("Trần Thị B", "VNPT", "0912345678");
employee2.printInfo();

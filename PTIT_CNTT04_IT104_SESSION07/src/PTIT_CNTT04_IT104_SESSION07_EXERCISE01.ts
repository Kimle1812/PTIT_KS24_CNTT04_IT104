class Employee{
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
}

class Manager extends Employee {
    teamSize: number;
    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo(): void {
        super.printInfo();
        console.log(`Team Size: ${this.teamSize}`);
    }
}
let employee = new Employee("Kim Kim", "Tech", "0123456666");
employee.printInfo();
let manager = new Manager("Jane", "Tem", "098764321", 10);
manager.printInfo();
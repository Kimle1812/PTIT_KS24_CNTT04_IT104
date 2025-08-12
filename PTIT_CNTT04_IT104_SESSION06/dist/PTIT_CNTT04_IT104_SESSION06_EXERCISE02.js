class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
class ParttimeJob extends Job {
    constructor(type, hourlyRate, workingHour) {
        super(type);
        this.hourlyRate = hourlyRate;
        this.workingHour = workingHour;
    }
    calculateSalary() {
        let salary = this.hourlyRate * this.workingHour;
        console.log(`Lương công việc bán thời gian: ${salary}`);
    }
}
class FulltimeJob extends Job {
    constructor(type, salary) {
        super(type);
        this.monthSalary = salary;
    }
    calculateSalary() {
        let salary = this.monthSalary * 10000000;
        console.log(`Lương công việc toàn thời gian: ${salary} VND`);
    }
}
let parttimeJob = new ParttimeJob("Bán thời gian", 20000, 20);
parttimeJob.printType();
parttimeJob.calculateSalary();
let fulltimeJob = new FulltimeJob("Toàn thời gian", 2);
fulltimeJob.printType();
fulltimeJob.calculateSalary();

abstract class Job {
    protected type: string;
    constructor(type: string) {
        this.type = type;
    }
    printType(): void{
        console.log(`Loại công việc: ${this.type}`);
    }
    abstract calculateSalary(): void;
}
class ParttimeJob extends Job {
    private hourlyRate: number;
    private workingHour: number;
    constructor(type: string, hourlyRate: number, workingHour: number) {
        super(type);
        this.hourlyRate = hourlyRate;
        this.workingHour = workingHour;
    }
    calculateSalary(): void {
        let salary = this.hourlyRate * this.workingHour;
        console.log(`Lương công việc bán thời gian: ${salary}`);
    }
}
class FulltimeJob extends Job {
    private monthSalary: number;
    constructor(type: string, salary: number) {
        super(type);
        this.monthSalary = salary;
    }
    calculateSalary(): void {
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

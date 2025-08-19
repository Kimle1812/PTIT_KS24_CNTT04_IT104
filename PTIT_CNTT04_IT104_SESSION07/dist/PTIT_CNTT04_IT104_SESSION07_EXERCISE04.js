class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`ID: ${this.id}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Subject: ${this.subject}`);
    }
}
let student = new Student("Kim", 234234234);
student.displayInfo();
let teacher = new Teacher("Hai", "IT");
teacher.displayInfo();

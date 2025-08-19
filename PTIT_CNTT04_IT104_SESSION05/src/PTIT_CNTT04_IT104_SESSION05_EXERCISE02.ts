class Student {
    id: number;
    age: number;
    email: string;
    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    printStudent(): void {
        console.log(`Id: ${this.id}, Age: ${this.age}, Email: ${this.email}`);
    }
}
let students: Student[] = [];
let student1 = new Student(1, 20, "nguyenle@gmail.com");
let student2 = new Student(2, 22, "kimkim@gmail.com");
let student3 = new Student(3, 21, "lenguyen@gmail.com");
students.push(student1, student2, student3);
students.forEach(student => student.printStudent());

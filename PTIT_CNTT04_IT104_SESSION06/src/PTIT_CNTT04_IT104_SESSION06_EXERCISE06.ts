class Student{
    private id: number;
    private name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
}
let allStudents: Student[] = [];
class Classroom{
    private students: Student[] = [];
    showStudents(): void {
        if (this.students.length === 0) {
            console.log("Không có học sinh nào trong lớp.");
            return;
        }
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
        });
    }
    addStudent(student: Student): void {
        this.students.push(student);
        allStudents.push(student);
    }
    filterStudent(id: number): Student | undefined {
        if (this.students.length === 0) {
            console.log("Không có học sinh nào trong lớp để lọc.");
            return ;
        }
        return this.students.find(student => student.getId() === id);
    }
    addStudentInClass(indexId:number): void {
        let index = allStudents.findIndex(student => student.getId() === indexId);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }else {
            console.log("Không tìm thấy học sinh với ID này.");
        }
        
    }

}
allStudents.push(new Student(1, "Nguyễn Văn A"));
allStudents.push(new Student(2, "Trần Thị B"));
allStudents.push(new Student(3, "Lê Văn C"));
allStudents.push(new Student(4, "Phạm Thị D"));
allStudents.push(new Student(5, "Nguyễn Thị E"));
allStudents.push(new Student(6, "Trần Văn F"));
let classroomA = new Classroom();
let classroomB = new Classroom();
classroomA.addStudentInClass(1);
classroomA.addStudentInClass(2);
classroomA.addStudentInClass(3);
classroomB.addStudentInClass(4);
classroomB.addStudentInClass(5);
classroomB.addStudentInClass(6);
let student = classroomA.filterStudent(1);
if (student) {
    console.log(`Tìm thấy học sinh: ID: ${student.getId()}, Tên: ${student.getName()}`);
} else {
    console.log("Không tìm thấy học sinh với ID này trong lớp A.");
}
console.log(`===Lop A===`);
classroomA.showStudents();
console.log(`===Lop B===`);
classroomB.showStudents();


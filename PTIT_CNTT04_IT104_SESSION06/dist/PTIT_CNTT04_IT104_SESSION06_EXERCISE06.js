class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudents = [];
class Classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        if (this.students.length === 0) {
            console.log("Không có học sinh nào trong lớp.");
            return;
        }
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
        });
    }
    addStudent(student) {
        this.students.push(student);
        allStudents.push(student);
    }
    filterStudent(id) {
        if (this.students.length === 0) {
            console.log("Không có học sinh nào trong lớp để lọc.");
            return;
        }
        return this.students.find(student => student.getId() === id);
    }
    addStudentInClass(indexId) {
        let index = allStudents.findIndex(student => student.getId() === indexId);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
        else {
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
}
else {
    console.log("Không tìm thấy học sinh với ID này trong lớp A.");
}
console.log(`===Lop A===`);
classroomA.showStudents();
console.log(`===Lop B===`);
classroomB.showStudents();
